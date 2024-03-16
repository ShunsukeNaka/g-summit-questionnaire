import { useRouter } from "next/router";

export default function Second() {
  const router = useRouter();
  return (
    <ul>
      <li>id:{" " + router.query.id}</li>
      <li>name:{" " + router.query.name}</li>
    </ul>
  );
}