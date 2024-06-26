import Image from 'next/image';

const MyImageComponent = () => {
    return (
      <div>
        <Image
          src="/images/stockLogo.png"
          alt="stockLogo"
          width={100}
          height={100}
        />
      </div>
    );
  };
  
export default MyImageComponent;
