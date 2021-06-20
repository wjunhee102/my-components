import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

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

interface BlockEleProps {
  blockData: BlockData
}

interface ContentEditableEle {
  className: string;
  editable: boolean;
  onKeyDown?: any;
  onKeyPress?: any;
  onKeyUp?: any;
  onCopy?: any;
  onPaste?: any;
  onClick?: any;
  onMouseUp?: any;
  onMouseDown?: any;
  onMouseMove?: any;
  onFocus?: any;
  onBlur?: any;
  placeholder: string;
  dangerouslySetInnerHTML: {
    __html: any
  }
  contents?: string;
}


const ContentEditableEle = React.forwardRef<HTMLDivElement, ContentEditableEle>(({
  className,
  editable,
  onKeyPress, 
  onKeyUp,
  onKeyDown,
  onCopy,
  onPaste,
  onClick,
  onMouseUp,
  onMouseDown,
  onMouseMove,
  onFocus,
  onBlur,
  dangerouslySetInnerHTML,
  contents,
  placeholder
}, ref) => {
  
  return (
    <div 
      className={`bk-contentEditable ${className? className : ""}`}
      ref={ref}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onCopy={onCopy}
      onPaste={onPaste}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onFocus={onFocus}
      onBlur={onBlur}
      contentEditable={editable}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      placeholder={placeholder} 
    >
      { contents }
    </div>
  )
});

// 기본 block
const TextBlockEle: React.FC<BlockEleProps> = ({ blockData }) => {

  const contents = {
    __html: blockData.contents
  }

  return (
    <div className="flex">
      <div className="contents">
        <ContentEditableEle 
          className={blockData.styleType}
          editable={true}
          dangerouslySetInnerHTML={contents}
          placeholder="입력해주세요"
        />
      </div>
    </div>
  )
}

// title block
const HeaderBlockEle: React.FC<BlockEleProps> = ({ blockData }) => {

  const contents = {
    __html: blockData.contents
  }

  return (
    <div className="flex">
      <div className="contents">
        <ContentEditableEle 
          className={blockData.styleType}
          editable={true}
          dangerouslySetInnerHTML={contents}
          placeholder="입력해주세요"
        />
      </div>
    </div>
  )
}

const BlockElement: React.FC<BlockEleProps> = ({ blockData }) => {
  switch(blockData.type) {
    case "text" :
      return <TextBlockEle blockData={blockData} />
    case "title":
      return <HeaderBlockEle blockData={blockData} />
    default :
      return null;
  }
}

const BlockUtils: React.FC = () => {
  return (
    <div
      className="block-utils"
    >
      <div className="block-add-button">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="block-type-change-button">
        <FontAwesomeIcon icon={faGripVertical} />
      </div>
    </div>
  )
}

// hover 시 block-utils 나오게
const Block: React.FC<BlockEleProps> = ({ blockData }) => {
  const [ on, setOn ] = useState<boolean>(true);

  const handleHover = () => {
    setOn(true);
  }

  const endOn = () => {
    setOn(false);
  }

  return (
    <div 
      data-block-id={blockData.id} 
      className="block-zone contents"
      onMouseOver={handleHover}
      onMouseLeave={endOn}
    >
      
      { on? <BlockUtils /> : null }      
      
      <BlockElement blockData={blockData} />
      
      <div className="hidden">
        선택 영역?
      </div>

    </div>
  );
}

export default Block;