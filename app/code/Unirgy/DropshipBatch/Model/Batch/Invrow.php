<?php
/**
 * Unirgy LLC
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.unirgy.com/LICENSE-M1.txt
 *
 * @category   Unirgy
 * @package    Unirgy_Dropship
 * @copyright  Copyright (c) 2008-2009 Unirgy LLC (http://www.unirgy.com)
 * @license    http:///www.unirgy.com/LICENSE-M1.txt
 */

namespace Unirgy\DropshipBatch\Model\Batch;

use Magento\Framework\Model\AbstractModel;

class Invrow extends AbstractModel
{
    protected $_eventPrefix = 'udbatch_batch_invrow';
    protected $_eventObject = 'row';

    protected function _construct()
    {
        $this->_init('Unirgy\DropshipBatch\Model\ResourceModel\Batch\Invrow');
    }
}