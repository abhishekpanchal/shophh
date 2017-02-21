<?php

namespace Hhmedia\Formula\Controller\Index;

use Magento\Framework\View\Result\PageFactory;

class Index extends \Magento\Framework\App\Action\Action
{
	/**
     * @var PageFactory
     */
    protected $resultPageFactory;
	
	/**
     * @param \Magento\Framework\App\Action\Context $context
     * @param PageFactory $resultPageFactory
     */
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        PageFactory $resultPageFactory
    ) {
        $this->resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }
	
    /**
     * Default Formula Index page
     *
     * @return void
     */
    public function execute()
    {
        $this->_view->loadLayout();
        $this->_view->getLayout()->initMessages();
		$this->_view->getPage()->getConfig()->getTitle()->set(__('Site Formula'));
        $listBlock = $this->_view->getLayout()->getBlock('formula.list');

        if ($listBlock) {
            $currentPage = abs(intval($this->getRequest()->getParam('p')));
            if ($currentPage < 1) {
                $currentPage = 1;
            }
            
            $listBlock->setCurrentPage($currentPage);
        }
        
        /** @var \Magento\Framework\View\Result\Page $resultPage */
        $resultPage = $this->resultPageFactory->create();
        return $resultPage;
    }
}