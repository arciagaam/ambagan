import React from 'react';

interface ContributorRowProps {
  contributor: any;
  itemId: number;
  onEditContributor: (userId: number, itemId: number) => void;
  onRemoveContributor: (userId: number, itemId: number) => void;
}

const ContributorRow: React.FC<ContributorRowProps> = ({
  contributor,
  itemId,
  onEditContributor,
  onRemoveContributor,
}) => (
  <div className="flex items-center justify-between bg-gray-50 rounded px-3 py-2">
    <span className="text-gray-800">{contributor.User.first_name ?? contributor.User.email}</span>
    <div className="flex gap-2">
      <button className="text-blue-500 hover:underline text-xs" onClick={() => onEditContributor(contributor.userId, itemId)}>Edit</button>
      <button className="text-red-500 hover:underline text-xs" onClick={() => onRemoveContributor(contributor.userId, itemId)}>Remove</button>
    </div>
  </div>
);

export default ContributorRow;
