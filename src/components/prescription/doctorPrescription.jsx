import { useParams } from "react-router-dom";
import prsc from "../../models/prescription.json"

export default function DoctorPrescription(){
    let { prescriptionId } = useParams();
    return(
        <div className="px-[5%] flex flex-col justify-center items-center py-16 font-mono">
            <div className="flex justify-between gap-16 px-12 py-16 bg-blue-400">
                <div>
                <h1 className="text-3xl font-bold tracking-widest">KIDANE MIHRET CLINIC</h1>
                <p>This is an officail Kidane Mihret Clinic Prescription Card, It is the only communication medium between a Doctor and a Laboratoriest.</p>
                </div>
                <div>
                <img src="/icons/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}