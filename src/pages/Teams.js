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
        <div id="teams">
          <h2 className="mt-16 mb-10 text-center text-4xl font-bold">
            Team 2 : Debugger
          </h2>
          <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
            <Person data={githubs} />
          </div>
        </div>
      )}
    </>
  );
}
