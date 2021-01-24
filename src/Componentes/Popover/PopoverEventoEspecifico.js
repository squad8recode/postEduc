import { Popover, OverlayTrigger, Button, Image } from 'react-bootstrap'
import aviso from '../../Img/icone_aviso.png'



const popover = (
    <Popover id="popover-basic">
      <Popover.Title className="text-center" as="h3">Aviso!</Popover.Title>
      <Popover.Content>
        Evento não verificado pela nossa equipe, confirme as informações antes de participar.
      </Popover.Content>
    </Popover>
  );

const PopoverEventoEspecifico = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="my-2 float-right" variant="white" size="sm"><strong><Image src={aviso}></Image></strong></Button>
    </OverlayTrigger>
);

export default PopoverEventoEspecifico;