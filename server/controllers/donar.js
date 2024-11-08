import Donor from "../model/DonarModel.js";
import catchAsync from "../utils/catchAsync.js";

const allDonars = catchAsync(async (_, args)=>{
    return await Donor.find();
})

export {allDonars}