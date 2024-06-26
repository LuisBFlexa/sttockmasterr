import Image from 'next/image';

const EstoqueImageComponent = () => {
    return (
        <div style={{ margin: '20px' }}>
          <Image
            src="/images/estoque.jpg"
            alt="Estoque"
            width={500}
            height={500}
            style={{ display: 'block' }} 
          />
        </div>
    );
};

export default EstoqueImageComponent;
