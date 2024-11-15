import ComponentCard from '../component-card/component-card'
import React from "react";

type cardGridProps = {
  children: React.ReactNode;
}

export default function cardGrid({children} : cardGridProps) {
  return <div className='card-grid'>
    {children}
  </div>
}