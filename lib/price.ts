type Item = {
  amount: number;
};

type Contributor = {
  givenValue: number | null;
};

export const calculateTotalPrice = (price: Item[]) => {
  return price.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
};

export const calculateContributionPerPerson = (
  contributors: Contributor[],
  totalAmount: number,
) => {
  const getTotalContribution = contributors.reduce(
    (acc, curr) => {
      if (curr.givenValue === null) {
        return {
          nonContributors: acc.nonContributors + 1,
          total: acc.total,
        };
      }

      return {
        nonContributors: acc.nonContributors,
        total: acc.total + curr.givenValue,
      };
    },
    {
      nonContributors: 0,
      total: 0,
    },
  );

  if (getTotalContribution.total === totalAmount) return 0;

  const remainingContribution =
    (totalAmount - getTotalContribution.total) /
    getTotalContribution.nonContributors;

  return Math.round(remainingContribution);
};
