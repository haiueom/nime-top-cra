import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import Loading from "../components/Loading";
import Person from "../components/Person";

export default function Team() {
  const [githubs, setgithubs] = useState([]);

  const users = ["MrRuf04", "haiueom", "eladitia", "muhammadfaisal30ppl"];

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const fetchGithub = async () => {
    const githubs = [];

    for (let i = 0; i < users.length; i++) {
      const { data } = await octokit.request("GET /users/{username}", {
        username: users[i],
      });
      githubs.push(data);
    }

    setgithubs(githubs);
  };

  useEffect(() => {
    fetchGithub();
  });

  if (githubs.length < 4) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-10 text-center text-4xl font-bold">
        Team 2 : Debugger
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <Person data={githubs} />
      </div>
    </div>
  );
}
