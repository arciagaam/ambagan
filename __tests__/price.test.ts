import { expect, it } from "vitest";
import {
  calculateTotalPrice,
  calculateContributionPerPerson,
} from "@/lib/price";

it("should equal to 500", () => {
  const input = [
    {
      amount: 100,
    },
    {
      amount: 200,
    },
    {
      amount: 150,
    },
    {
      amount: 50,
    },
  ];

  expect(calculateTotalPrice(input)).toBe(500);
});

it("should equal to the expected value", () => {
  const testCases: {
    expected: number;
    total: number;
    contributors: {
      givenValue: number | null;
    }[];
  }[] = [
    {
      expected: 300,
      total: 1000,
      contributors: [
        {
          givenValue: 400,
        },
        {
          givenValue: null,
        },
        {
          givenValue: null,
        },
      ],
    },
    {
      expected: 0,
      total: 1000,
      contributors: [
        {
          givenValue: 400,
        },
        {
          givenValue: 300,
        },
        {
          givenValue: 300,
        },
      ],
    },
    {
      expected: 333,
      total: 1000,
      contributors: [
        {
          givenValue: null,
        },
        {
          givenValue: null,
        },
        {
          givenValue: null,
        },
      ],
    },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    expect(
      calculateContributionPerPerson(testCase.contributors, testCase.total),
    ).toBe(testCase.expected);
  }
});
