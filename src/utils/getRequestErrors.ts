import { SerializedError } from '@reduxjs/toolkit';
import {
	IGetProjectsDataErrorObject,
	IGetProjectsErrorObject,
} from '../interfaces/getProjectsErrorsInterfaces';

export const getRequestErrors = (
	errorObject:
		| IGetProjectsErrorObject
		| IGetProjectsDataErrorObject
		| SerializedError
		| undefined
) => {
	if (!!errorObject && 'error' in errorObject) {
		return errorObject.error;
	}

	if (!!errorObject && 'data' in errorObject) {
		return errorObject.data.error.errors.map(({ message }) => message);
	}
};
