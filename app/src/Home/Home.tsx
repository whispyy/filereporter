import React, { useState } from 'react';
import { useQuery } from 'urql';
import { NodeFolder } from '../models/node';
import DisplayResults from './components/DisplayResults';
import InputSearch from './components/InputSearch';
import './Home.css';
import { DirectoryQuery } from './HomeApi';

type Node = { node: NodeFolder };

function Home() {
  const [path, setPath] = useState<string>('');
  const [result, reexecuteQuery] = useQuery({
    query: DirectoryQuery,
    variables: { path },
  });
  const { data, fetching, error } = result;
  const { node }: Node = data;

  const search = (path: string) => setPath(path);

  return (
    <div>
      <InputSearch
        disabled={fetching}
        onClick={search}
      />
      {node && <DisplayResults node={node} />}
    </div>
  );
}

export default Home;
