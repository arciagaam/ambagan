import React from 'react';
import ContributorList from './ContributorList';

interface ContributionItemCardProps {
  item: any;
  onEditAmount: (itemId: number) => void;
  onEditContributor: (userId: number, itemId: number) => void;
  onRemoveContributor: (userId: number, itemId: number) => void;
  onAddContributor: (itemId: number) => void;
}

const ContributionItemCard: React.FC<ContributionItemCardProps> = ({
  item,
  onEditAmount,
  onEditContributor,
  onRemoveContributor,
  onAddContributor,
}) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200">
    <div className="flex items-center justify-between mb-2">
      <div>
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-gray-600">Amount: <span className="font-mono">{String(item.amount)}</span></p>
      </div>
      <button className="text-blue-600 hover:underline text-sm" onClick={() => onEditAmount(item.id)}>Edit</button>
    </div>
    <div className="mt-2">
      <p className="font-medium text-gray-700 mb-1">Contributors:</p>
      <ContributorList
        contributors={item.Contributor}
        itemId={item.id}
        onEditContributor={onEditContributor}
        onRemoveContributor={onRemoveContributor}
        onAddContributor={onAddContributor}
      />
    </div>
  </div>
);

export default ContributionItemCard;
