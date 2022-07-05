import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function ViewDialog() {
  return (
    <>
      <div>
        <p>
          <label class="btn" for="modal-1">
            Show me modal with a cat
          </label>
        </p>
      </div>

      <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="modal-1"></label>
        <div class="modal__inner">
          <label class="modal__close" for="modal-1"></label>
          <h2>Caaaats FTW!</h2>
        </div>
      </div>
    </>
  );
}
export default ViewDialog;
