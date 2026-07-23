export const RESULT_TYPE_DATA = 0;
export const RESULT_TYPE_LIST = 1;
export const RESULT_TYPE_JSON = 2;
export function handleResult(result, mapper) {
    if (result.isSuccess || result.data != null) {
        try {
            const response = result.data;
            const source = response && typeof response === "object" && "data" in response ? response.data : result.data;
            const data = mapper ? mapper(source) : source;
            return {
                isSuccess: true,
                data,
                statusCode: result.statusCode,
                message: response?.message,
            };
        }
        catch (error) {
            return {
                isSuccess: false,
                message: `Data parsing error: ${error instanceof Error ? error.message : String(error)}`,
                statusCode: result.statusCode,
            };
        }
    }
    return {
        isSuccess: false,
        message: result.message ?? "API request failed",
        statusCode: result.statusCode,
    };
}
