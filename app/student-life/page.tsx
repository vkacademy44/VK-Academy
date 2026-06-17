import { getStudentLifeItems } from "@/sanity/lib/queries";
import StudentLifeClient from "./StudentLifeClient";

export default async function StudentLifePage() {
  const moments = await getStudentLifeItems().catch(() => []);

  return <StudentLifeClient moments={moments} />;
}