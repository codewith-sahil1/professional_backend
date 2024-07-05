//  in this file we are jsut going to make and simplify the utility of the function in this sort of the program ...

//  where we are writing the code and can be easily use any when and where ever we want in this same project ...

// now we can do this with the help of the promises with then() and catch() functions.... and with the same time with the help of the async await with try and catch method


//  using promises.......  

// const asyncHandler = (requestHandler) => {

//     (req,res,next)=>{
//         Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
//     }
//  }



// Note:- higher order functions are those function which can take the function as the arguments and can eaily the return as a function .. similar they are likely to as variable ..


// using async await.......
const asyncHandler = (fn) => async (res, res, next) => {

    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
export default { asyncHandler }