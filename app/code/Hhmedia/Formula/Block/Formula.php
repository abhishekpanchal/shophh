<?php

namespace Hhmedia\Formula\Block;

use Hhmedia\Formula\Model\FormulaFactory;

/**
 * Formula content block
 */
class Formula extends \Magento\Framework\View\Element\Template
{
    /**
     * Formula collection
     *
     * @var Hhmedia\Formula\Model\ResourceModel\Formula\Collection
     */
    protected $_formulaCollection = null;
    
    protected $_productRepository;

    protected $formulaFactory;
    /**
     * Formula factory
     *
     * @var \Hhmedia\Formula\Model\FormulaFactory
     */
    protected $_formulaCollectionFactory;
    
    /** @var \Hhmedia\Formula\Helper\Data */
    protected $_dataHelper;
    
    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Hhmedia\Formula\Model\ResourceModel\Formula\CollectionFactory $formulaCollectionFactory
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Catalog\Model\ProductRepository $productRepository,
        \Hhmedia\Formula\Model\ResourceModel\Formula\CollectionFactory $formulaCollectionFactory,
        FormulaFactory $formulaFactory,
        \Hhmedia\Formula\Helper\Data $dataHelper,
        array $data = []
    ) {
        $this->_formulaCollectionFactory = $formulaCollectionFactory;
        $this->_productRepository = $productRepository;
        $this->formulaFactory = $formulaFactory;
        $this->_dataHelper = $dataHelper;
        parent::__construct(
            $context,
            $data
        );
    }
    
    /**
     * Retrieve formula collection
     *
     * @return Hhmedia\Formula\Model\ResourceModel\Formula\Collection
     */
    protected function _getCollection()
    {
        $collection = $this->_formulaCollectionFactory->create();
        return $collection;
    }
    

    public function getProductById($id)
    {
        return $this->_productRepository->getById($id);
    }

    public function getFormula($formulaId)
    {
        $formula   = $this->formulaFactory->create();
        if ($formulaId) {
            $formula->load($formulaId);
        }
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $model = $objectManager->create('\Hhmedia\Formula\Model\Formula');
        $products  =  $model->getProducts($formula);
        return $products;
    }

    /**
     * Retrieve prepared formula collection
     *
     * @return Hhmedia\Formula\Model\ResourceModel\Formula\Collection
     */
    public function getCollection()
    {
        if (is_null($this->_formulaCollection)) {
            $this->_formulaCollection = $this->_getCollection();
            $this->_formulaCollection->setCurPage($this->getCurrentPage());
            $this->_formulaCollection->setPageSize($this->_dataHelper->getFormulaPerPage());
            $this->_formulaCollection->setOrder('sort_order','asc');
        }

        return $this->_formulaCollection;
    }
    
    /**
     * Fetch the current page for the formula list
     *
     * @return int
     */
    public function getCurrentPage()
    {
        return $this->getData('current_page') ? $this->getData('current_page') : 1;
    }
    
    /**
     * Return URL to item's view page
     *
     * @param Hhmedia\Formula\Model\Formula $formulaItem
     * @return string
     */
    public function getItemUrl($formulaItem)
    {
        return $this->getUrl('*/*/view', array('id' => $formulaItem->getId()));
    }
    
    /**
     * Return URL for resized Formula Item image
     *
     * @param Hhmedia\Formula\Model\Formula $item
     * @param integer $width
     * @return string|false
     */
    public function getImageUrl($item, $width)
    {
        return $this->_dataHelper->resize($item, $width);
    }
    
    /**
     * Get a pager
     *
     * @return string|null
     */
    public function getPager()
    {
        $pager = $this->getChildBlock('formula_list_pager');
        if ($pager instanceof \Magento\Framework\Object) {
            $formulaPerPage = $this->_dataHelper->getFormulaPerPage();

            $pager->setAvailableLimit([$formulaPerPage => $formulaPerPage]);
            $pager->setTotalNum($this->getCollection()->getSize());
            $pager->setCollection($this->getCollection());
            $pager->setShowPerPage(TRUE);
            $pager->setFrameLength(
                $this->_scopeConfig->getValue(
                    'design/pagination/pagination_frame',
                    \Magento\Store\Model\ScopeInterface::SCOPE_STORE
                )
            )->setJump(
                $this->_scopeConfig->getValue(
                    'design/pagination/pagination_frame_skip',
                    \Magento\Store\Model\ScopeInterface::SCOPE_STORE
                )
            );

            return $pager->toHtml();
        }

        return NULL;
    }
}
