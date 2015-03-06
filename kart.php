<?php

global $kart;

define("KART_DIR",dirname(__FILE__));

//** require core libraries **//

require_once KART_DIR . "/core/events/events.php";

require_once KART_DIR . "/core/cart.php";
require_once KART_DIR . "/core/exception.php";
require_once KART_DIR . "/core/order.php";

//** load configuration, create if not available **//

