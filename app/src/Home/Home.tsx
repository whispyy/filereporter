import React, { useState } from 'react';
import Path from 'path';
import { useQuery } from 'urql';
import { NodeFolder, SubNodeFolder } from '../models/node';
import ResultTable from './components/ResultTable';
import GlobalResult from './components/GlobalResult';
import InputSearch from './components/InputSearch';
import './Home.css';
import { DirectoryQuery } from './HomeApi';
import SlowLoading from './components/SlowLoading';

type Node = {
  node: NodeFolder,
};

function Home() {
  const [path, setPath] = useState<string>('');
  const [result] = useQuery<Node>({
    query: DirectoryQuery,
    variables: { path },
  });
  const { data, fetching, error } = result;

  const search = (path: string) => setPath(path);
  const searchSubItem = (subNode: SubNodeFolder) => setPath(subNode.path);
  const parentFolder: string = Path.resolve(data?.node.path || '', '..');
  const searchParentItem = () => setPath(parentFolder);

  return (
    <div className="Home-Container">
      {error && <span className="Error">{error.message}</span>}
      {fetching && <SlowLoading />}

      <InputSearch
        disabled={fetching}
        onClick={search}
      />

      <GlobalResult node={data?.node} fetching={fetching} />

      {data?.node && 
        <button
          className="BackButton"
          onClick={searchParentItem}
          disabled={fetching}
        >Parent</button>
      }

      <ResultTable
        node={data?.node}
        fetching={fetching}
        onItemClick={searchSubItem}
      />
    </div>
  );
}

export default Home;
