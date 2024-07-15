 
import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {

  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 ">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
     {session?.user? <ReservationForm user={session.user} cabin={cabin}/>: <LoginMessage />}
      
    </div>
  );
}
