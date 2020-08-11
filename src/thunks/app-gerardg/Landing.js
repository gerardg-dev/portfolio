import {
  SHOW_LOADER,
  HIDE_LOADER,
  LANDING_DATA,
  LANDING_ERROR,
  LANDING_ERROR_CLEAR,
  SET_USER,
  SET_USER_STACKS,
  SET_USER_PROJECTS,
  SET_USER_TOOLS,
  SET_USER_EXPERIENCE,
  SET_USER_LANGUAGES
} from "constants/app-gerardg/ActionTypes";

import { firebase } from "../../firebase/firebase";

import dbModels from "../../db-models/app-gerardg";

const userID = "074ji7bTqTVVqeVZcR0l";

const isDataAvailable = propname => {
  let isAvailabe = true;
  if (
    propname !== undefined &&
    propname !== null &&
    propname.toString().length !== 0
  ) {
    isAvailabe = false;
  }
  return isAvailabe;
};

export const getLandingData = () => {
  return async dispatch => {
    try {
      dispatch({ type: LANDING_ERROR_CLEAR });
      dispatch({ type: SHOW_LOADER });

      let payload = {
        user: null,
        stacks: null,
        projects: null,
        tools: null,
        experience: null,
        languages: null
      };

      const getUser = async () => {
        const uid = userID;

        let userObject = null;

        const userSnapshot = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        if (userSnapshot !== undefined && userSnapshot !== null) {
          userObject = userSnapshot.data();
        }

        if (userObject !== null) {
          dispatch({ type: SET_USER, payload: null });
          dispatch({ type: SET_USER_STACKS, payload: [] });
          dispatch({ type: SET_USER_PROJECTS, payload: [] });
          dispatch({ type: SET_USER_TOOLS, payload: [] });
          dispatch({ type: SET_USER_EXPERIENCE, payload: [] });
          dispatch({ type: SET_USER_LANGUAGES, payload: [] });

          const userModel = dbModels.user;
          let mergedUserObject = { ...userModel, ...userObject };

          let userStackIDs = mergedUserObject.user_stack_ids;
          let userProjectIDs = mergedUserObject.project_ids;
          let userToolIDs = mergedUserObject.tool_ids;
          let userExperienceIDs = mergedUserObject.experience_ids;
          let userLanguageIDs = mergedUserObject.user_language_ids;

          let userStacks = [];
          let userProjects = [];
          let userTools = [];
          let userExperience = [];
          let userLanguages = [];

          if (userStackIDs !== undefined && userStackIDs.length > 0) {
            await Promise.all(
              userStackIDs.map(async (id, index) => {
                const snapshot = await firebase
                  .firestore()
                  .collection("user_stacks")
                  .doc(id)
                  .get();
                const userStackObject = snapshot.data();

                if (userStackObject) {
                  const snapshot = await firebase
                    .firestore()
                    .collection("stacks")
                    .doc(userStackObject.stack_id)
                    .get();
                  const stackObject = snapshot.data();

                  let userStackConcepts = [];

                  if (
                    userStackObject &&
                    userStackObject.user_stack_concept_ids
                  ) {
                    const stackConceptIDs =
                      userStackObject.user_stack_concept_ids;
                    if (stackConceptIDs.length !== 0) {
                      await Promise.all(
                        stackConceptIDs.map(async (id, index) => {
                          const snapshot = await firebase
                            .firestore()
                            .collection("user_stack_concepts")
                            .doc(id)
                            .get();
                          const userStackConceptObject = snapshot.data();
                          const stackConceptID =
                            userStackConceptObject.stack_concept_id;

                          const stackConceptSnapshot = await firebase
                            .firestore()
                            .collection("stack_concepts")
                            .doc(stackConceptID)
                            .get();
                          const stackConceptObject = stackConceptSnapshot.data();

                          userStackConcepts.push({
                            ...userStackConceptObject,
                            ...{
                              logo_url: stackConceptObject.logo_url,
                              name: stackConceptObject.name,
                              description: stackConceptObject.description
                            }
                          });
                        })
                      );
                    }
                  }

                  userStacks.push({
                    stack_id: userStackObject.stack_id,
                    name: stackObject.name,
                    logo_url: stackObject.logo_url,
                    level: userStackObject.level,
                    show_stack_concepts: userStackObject.show_stack_concepts,
                    stack_concept_ids: userStackObject.user_stack_concept_ids,
                    stack_concepts: userStackObject.stack_concepts,
                    concepts: userStackConcepts
                  });
                }
              })
            );
          }
          if (userProjectIDs !== undefined && userProjectIDs.length > 0) {
            await Promise.all(
              userProjectIDs.map(async (id, index) => {
                const snapshot = await firebase
                  .firestore()
                  .collection("projects")
                  .doc(id)
                  .get();
                const projectObject = snapshot.data();
                userProjects.push(projectObject);
              })
            );
          }
          if (userToolIDs !== undefined && userToolIDs.length > 0) {
            await Promise.all(
              userToolIDs.map(async (id, index) => {
                const snapshot = await firebase
                  .firestore()
                  .collection("tools")
                  .doc(id)
                  .get();
                const toolObject = snapshot.data();
                userTools.push(toolObject);
              })
            );
          }
          if (userExperienceIDs !== undefined && userExperienceIDs.length > 0) {
            await Promise.all(
              userExperienceIDs.map(async (id, index) => {
                const snapshot = await firebase
                  .firestore()
                  .collection("experience")
                  .doc(id)
                  .get();
                const experienceObject = snapshot.data();
                userExperience.push(experienceObject);
              })
            );
          }
          if (userLanguageIDs !== undefined && userLanguageIDs.length > 0) {
            await Promise.all(
              userLanguageIDs.map(async (id, index) => {
                const snapshot = await firebase
                  .firestore()
                  .collection("user_languages")
                  .doc(id)
                  .get();
                const userLanguageObject = snapshot.data();

                if (userLanguageObject) {
                  const snapshot = await firebase
                    .firestore()
                    .collection("languages")
                    .doc(userLanguageObject.language_id)
                    .get();
                  const languageObject = snapshot.data();

                  userLanguages.push({
                    language_id: userLanguageObject.language_id,
                    name: languageObject.name,
                    logo_url: languageObject.logo_url,
                    level: userLanguageObject.level
                  });
                }
              })
            );
          }

          payload = {
            user: mergedUserObject,
            stacks: userStacks,
            projects: userProjects,
            tools: userTools,
            experience: userExperience,
            languages: userLanguages
          };
        }
      };
      await getUser();

      dispatch({ type: LANDING_DATA, payload });

      dispatch({ type: HIDE_LOADER });
    } catch (error) {
      dispatch({ type: HIDE_LOADER });
      console.log(error);
      dispatch({ type: LANDING_ERROR, payload: error });
      // return Promise.reject(error);
    }
  };
};
