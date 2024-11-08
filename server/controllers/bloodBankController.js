import BloodBankModel from "../model/BloodBankModel";
import catchAsync from "../utils/catchAsync";


export const allBloodBank = catchAsync(async (_, args)=>{
    return await BloodBankModel.find();
})

