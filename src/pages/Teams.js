import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import Loading from "../components/Loading";
import Person from "../components/Person";

export default function Team() {
  const [githubs, setGithubs] = useState([]);

  useEffect(() => {
    const users = ["MrRuf04", "haiueom", "eladitia", "muhammadfaisal30ppl"];

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });
    const fetchGithubs = async () => {
      const githubs = await Promise.all(
        users.map(async (user) => {
          const { data } = await octokit.request("GET /users/{username}", {
            username: user,
          });
          return data;
        })
      );

      setGithubs(githubs);
    };

    try {
      fetchGithubs();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {githubs.length === 0 ? (
        <Loading />
      ) : (
        <div id="teams" className="mx-auto max-w-5xl px-4 py-8">
          <h1 className="mb-10 text-center text-4xl font-bold">
            Team 2 : Debugger
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <Person data={githubs} />
          </div>
        </div>
      )}
    </>
  );
}
