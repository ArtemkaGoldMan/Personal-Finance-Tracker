import { useUser } from "@clerk/clerk-react";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <h1>Hello {user?.firstName}! Here are your finances!</h1>
    </div>
  );
};
