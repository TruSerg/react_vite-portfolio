export interface IGetProjectsErrorObject {
	status: string;
	error: string;
}

export interface IGetProjectsDataErrorObject {
	status: number;
	data: IErrorDataObject;
}

interface IErrorDataObject {
	error: IErrorObject;
}

interface IErrorObject {
	code: number;
	message: string;
	errors: IArrayErrorObject[];
	status: string;
	details: IErrorObjectDetail[];
}

interface IErrorObjectDetail {
	'@type': string;
	reason: string;
	domain: string;
	metadata: IErrorMetadata;
}

interface IErrorMetadata {
	service: string;
}

interface IArrayErrorObject {
	message: string;
	domain: string;
	reason: string;
}
