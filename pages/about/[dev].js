import { useRouter } from "next/router";

const devPage = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();
  console.log(router.query.dev);
  console.log(details[router.query.dev - 1]);

  return (
    <div>
      {details[router.query.dev - 1] ? (
        <div>
          <h1>{details[router.query.dev - 1].name}</h1>
          <h3>{details[router.query.dev - 1].role}</h3>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default devPage;
