import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size="xl">
      <ModalOverlay>
        <ModalContent>
          <ModalBody p={0}>
            <Image src={imgUrl} />
          </ModalBody>
          <ModalFooter textAlign="left" bg="pGray.800">
            <Link href={imgUrl} isExternal mr="auto">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
