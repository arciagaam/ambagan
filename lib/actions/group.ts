import { Contribution, Group } from "@prisma/client";
import { API_URL } from "../constants";

export const getGroups = async (): Promise<Group[]> => {
  const req = await fetch(`${API_URL}/groups`);
  if (!req.ok) {
    throw new Error(`${req.status}`);
  }
  const res = await req.json();
  return res;
};

export const getGroupById = async (
  id: number,
): Promise<Group & { contributions: Contribution[] }> => {
  const req = await fetch(`${API_URL}/groups/${id}`);
  if (!req.ok) {
    throw new Error(`${req.status}`);
  }
  const res = await req.json();
  return res;
};

export const addGroup = async (
  payload: Omit<Group, "id" | "createdAt" | "updatedAt">,
): Promise<Group> => {
  const req = await fetch(`${API_URL}/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!req.ok) {
    throw new Error(`${req.status}`);
  }
  const res = await req.json();
  return res;
};
