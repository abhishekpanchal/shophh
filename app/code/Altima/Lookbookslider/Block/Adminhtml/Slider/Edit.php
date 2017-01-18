<?php

/**
 * Altima Lookbook Professional Extension
 *
 * Altima web systems.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is available through the world-wide-web at this URL:
 * http://shop.altima.net.au/tos
 *
 * @category   Altima
 * @package    Altima_LookbookProfessional
 * @author     Altima Web Systems http://altimawebsystems.com/
 * @license    http://shop.altima.net.au/tos
 * @email      support@altima.net.au
 * @copyright  Copyright (c) 2016 Altima Web Systems (http://altimawebsystems.com/)
 */

namespace Altima\Lookbookslider\Block\Adminhtml\Slider;

class Edit extends \Magento\Backend\Block\Widget\Form\Container {

    protected $_coreRegistry = null;

    public function __construct(
    \Magento\Backend\Block\Widget\Context $context, \Magento\Framework\Registry $registry, array $data = []
    ) {
        $this->_coreRegistry = $registry;
        parent::__construct($context, $data);
    }

    protected function _construct() {
        $this->_objectId   = 'id';
        $this->_blockGroup = 'Altima_Lookbookslider';
        $this->_controller = 'adminhtml_slider';
        parent::_construct();
        if ($this->_isAllowedAction('Altima_Lookbookslider::slider')) {
            $this->buttonList->add(
                    'saveandcontinue', [
                'label'          => __('Save and Continue Edit'),
                'class'          => 'save',
                'data_attribute' => [
                    'mage-init' => [
                        'button' => ['event' => 'saveAndContinueEdit', 'target' => '#edit_form'],
                    ],
                ]
                    ], -100
            );
        } else {
            $this->buttonList->remove('save');
        }
        if (!$this->_isAllowedAction('Altima_Lookbookslider::slider')) {
            $this->buttonList->remove('delete');
        }
    }

    protected function _isAllowedAction($resourceId) {
        return $this->_authorization->isAllowed($resourceId);
    }

    protected function _getSaveAndContinueUrl() {
        return $this->getUrl('*/*/save', ['_current' => true, 'back' => 'edit', 'active_tab' => '{{tab_id}}']);
    }

    protected function _prepareLayout() {
        $this->_formScripts[] = "
            function toggleEditor() {
                if (tinyMCE.getInstanceById('slider_content') == null) {
                    tinyMCE.execCommand('mceAddControl', false, 'slider_content');
                } else {
                    tinyMCE.execCommand('mceRemoveControl', false, 'slider_content');
                }
            };
        ";
        return parent::_prepareLayout();
    }

}
