import React from 'react';
import ContributorRow from './ContributorRow';

interface ContributorListProps {
  contributors: any[];
  itemId: number;
  onEditContributor: (userId: number, itemId: number) => void;
  onRemoveContributor: (userId: number, itemId: number) => void;
  onAddContributor: (itemId: number) => void;
}

const ContributorList: React.FC<ContributorListProps> = ({
  contributors,
  itemId,
  onEditContributor,
  onRemoveContributor,
  onAddContributor,
}) => {
  if (contributors && contributors.length) {
    return (
      <div className="flex flex-col gap-2">
        {contributors.map((contributor) => (
          <ContributorRow
            key={contributor.userId}
            contributor={contributor}
            itemId={itemId}
            onEditContributor={onEditContributor}
            onRemoveContributor={onRemoveContributor}
          />
        ))}
      </div>
    );
  }
  return (
    <p className="text-gray-400 italic">No contributors. <button className="text-blue-500 hover:underline" onClick={() => onAddContributor(itemId)}>Add Contributor</button></p>
  );
};

export default ContributorList;
