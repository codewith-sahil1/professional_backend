class ApiError extends Error {


    constructor(statusCode,
        message = "something went wrong",
        errors = [],
        statck = " ") {


        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        success.message = false
        this.errors = errors
        // own task just read about some points about " this.data field"


        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default {ApiError}