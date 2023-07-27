import React, { useState } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';

interface IAvatarProps {
  name?: string;
  size?: AvatarSize;
  url?: string;
}

const Avatar = (props: IAvatarProps) => {
  const { size = 'md', url, name = 'ChatD' } = props;
  const [errorImage, setErrorImage] = useState(false);

  const firstLetterUserName = () => {
    const splitName: string[] = name.toUpperCase().split(' ');

    if (splitName.length === 1) {
      return splitName[0].charAt(0);
    } else {
      return splitName[0].charAt(0) + splitName[splitName.length - 1].charAt(0);
    }
  };

  const getSize = (size: AvatarSize) => {
    switch (size) {
      case 'sm':
        return 20;
      case 'md':
        return 36;
      case 'lg':
        return 96;
      default:
        return 36;
    }
  };

  const onErrorSrc = ({
    currentTarget
  }: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrorImage(true);
    currentTarget.onerror = null;
  };

  return (
    <>
      <div className='bg-red-100'></div>
      {errorImage || !url ? (
        <div
          className={`rounded-full shadow-lg flex items-center justify-center bg-gray-400 
					min-h-[${getSize(size)}px] max-h-[${getSize(size)}px]
					min-w-[${getSize(size)}px] max-w-[${getSize(size)}px]`}
        >
          <span
            className={`font-bold text-white text-[${getSize(size) / 2}px]`}
          >
            {firstLetterUserName()}
          </span>
        </div>
      ) : (
        <img
          className={`object-cover rounded-full shadow-sm h-[${getSize(size)}px]
					w-[${getSize(size)}px]`}
          src={url}
          alt='avatar'
          onError={onErrorSrc}
        />
      )}
    </>
  );
};

export default Avatar;
