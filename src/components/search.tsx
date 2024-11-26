'use client';

import { Input } from '@material-tailwind/react';
import { useState } from 'react';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <Input
      label="Search Todo"
      icon={<i className="fas fa-search" />}
      placeholder="Search Todo"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
