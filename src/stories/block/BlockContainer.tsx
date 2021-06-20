import React from 'react';
import BlockZone from './Block';
import './block.css';

interface BlockData {
  id: string;
  index: number;
  parentId: string;
  position: string;
  type: string;
  styleType: string;
  styles: any;
  contents: any;
}

export interface BlockProps {
  blockList: BlockData[];
}

const BlockContainer: React.FC<BlockProps> = ({ blockList }) => {
  return (
    <div className="block-container">
      {
        blockList?
        blockList.map((blockData) => <BlockZone blockData={blockData} />)
        : null
      }
    </div>
  )
}

export default BlockContainer;