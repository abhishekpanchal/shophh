<?php

namespace Unirgy\Dropship\Observer;

use \Magento\Checkout\Model\Session;
use \Magento\Framework\Event\Observer;
use \Magento\Framework\Event\ObserverInterface;
use \Unirgy\Dropship\Helper\Item;
use \Unirgy\Dropship\Helper\ProtectedCode;
use \Unirgy\Dropship\Observer\AbstractObserver;

class CheckoutCartAddProductComplete extends AbstractObserver implements ObserverInterface
{
    /**
     * @var ProtectedCode
     */
    protected $_hlpPr;

    /**
     * @var Session
     */
    protected $_modelSession;

    /**
     * @var Item
     */
    protected $_iHlp;

    public function __construct(
        ProtectedCode $helperProtectedCode,
        Item $helperItem,
        \Unirgy\Dropship\Observer\Context $context,
        array $data = []
    )
    {
        $this->_hlpPr = $helperProtectedCode;
        $this->_iHlp = $helperItem;

        parent::__construct($context, $data);
    }

    public function execute(Observer $observer)
    {
        if (!$this->_hlp->isActive()) {
           return;
        }
        try {
            $hlp = $this->_hlpPr;
            $items = $this->_hlp->getObj('\Magento\Checkout\Model\Session')->getQuote()->getAllItems();
            $this->_eventManager->dispatch('udropship_prepare_quote_items_before', array('items'=>$items));
            $hlp->applyDefaultVendorIds($items)->applyStockAvailability($items);
            $this->_iHlp->initBaseCosts($items);
            $this->_eventManager->dispatch('udropship_prepare_quote_items_after', array('items'=>$items));
        } catch (\Exception $e) {
            // all necessary actions should be already done by now, kill the exception
        }
    }
}
