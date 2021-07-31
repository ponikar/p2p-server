import { Response } from "express";

export const handleErroResponse = (res: Response, e: any) => {
  return res.status(500).json({ error: e.message });
};


export const handleNotFound = (res: Response, doc: string) => {
    return res.status(404).json({ error: `${doc} not found!` });
  };