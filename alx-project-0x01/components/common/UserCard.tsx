import { UserProps } from "@/interfaces";

{/* <UserProps> */}
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-2xl p-5 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-3 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite}, <br />
          {user.address.city} - {user.address.zipcode}
        </p>
        <p className="text-xs text-gray-400">
          (Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng})
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-sm text-gray-700">{user.company.name}</p>
        <p className="text-xs italic text-gray-500">"{user.company.catchPhrase}"</p>
        <p className="text-xs text-gray-400">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;

