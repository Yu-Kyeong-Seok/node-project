type getProfileRequestPath = {
    id: string;
}

type getProfileRequest = {
    params: getProfileRequestParams;
    path: getProfileRequestPath;
    body: getProfileRequestBody;
}

type getProfileResponse = IUser | null;
