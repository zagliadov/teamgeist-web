

export const asyncDispatch = async (
  dispatch: any,
  actionType: string,
  actionPayload: any
) => {
  dispatch({
    type: actionType,
    payload: await actionPayload,
  });
};
