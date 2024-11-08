import HospitalModel from "../model/HospitalModel";
import catchAsync from "../utils/catchAsync";


export const allHospitals = catchAsync(async (_, args)=>{
    return await HospitalModel.find();
})