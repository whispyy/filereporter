import React, { useState } from 'react';
import { useQuery } from 'urql';
import { NodeFolder } from '../models/node';
import ResultTable from './components/ResultTable';
import GlobalResult from './components/GlobalResult';
import InputSearch from './components/InputSearch';
import './Home.css';
import { DirectoryQuery } from './HomeApi';

type Node = {
  node: NodeFolder,
};

function Home() {
  const [path, setPath] = useState<string>('');
  const [result, reexecuteQuery] = useQuery<Node>({
    query: DirectoryQuery,
    variables: { path },
  });
  const { data, fetching, error } = result;

  const search = (path: string) => setPath(path);

  return (
    <div className="Home-Container">
      {error && <span className="Error">{error.message}</span>}
      <InputSearch
        disabled={fetching}
        onClick={search}
      />

      <GlobalResult node={data?.node} fetching={fetching} />

      <ResultTable
        node={data?.node}
        fetching={fetching}
      />
    </div>
  );
}

export default Home;
