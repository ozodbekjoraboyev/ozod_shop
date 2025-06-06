import dynamic from "next/dynamic";
const Profile = dynamic(() => import("."), {
  ssr: false,
});

function ProfilPage() {
  return <Profile />;
}
export default ProfilPage;
