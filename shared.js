(function(){
"use strict";


/* ---------- real-world map (generated from world-atlas land-110m, simplified) ---------- */
const WORLD_MAP_PATH = "M334.5,482.3L332.9,485L320.9,484.8L315.9,482.9L328.1,483.3L331.6,481.2ZM57.8,480.8L52.4,481.2L45.2,478.3L52.1,477.7ZM374.6,476.8L378,478L379.6,482.3L359.8,485.1L353.2,484.9L350,482.8L358.4,481.1L364.8,476.8ZM225.1,459.8L231.1,459.9L232.8,461.4L220,461.4L215.8,459.7ZM309.9,457.1L308.9,460.5L293.9,461L291.6,459.1L299.8,457.8L300.7,453.1L304.9,451.3ZM0,495.3L0,495.3L0,495.3L2.6,493.7L10.9,493.6L15.6,494.8L27.9,493L36.1,494.9L60.9,497.1L68.9,496.4L87.4,497.8L102.5,496.2L103.1,494.9L83.2,494.2L73.4,492.5L75.4,487.9L64.3,485.3L77.5,485L81.5,485.9L91.1,484.1L92.3,482L84.6,480.4L68.5,479.6L61,476.7L60.1,473.6L64,474.7L72.9,474.1L79.6,475L94.2,472.4L93.9,469.4L99.1,469.8L114.3,468.2L124.4,466.4L136.3,466.9L167.5,466.9L177.2,466.2L183.5,464.8L188.1,467.5L190.9,466.7L201.2,468.8L208.7,468.2L220.4,469.2L221.9,468L215.2,465.9L212,461.7L221.4,462.1L232.4,464.5L243.2,463.2L254.4,462.8L273.7,465.1L277,463.1L288.3,465.5L308.5,462.8L312.9,461.3L313.2,459L309.8,454.7L312.7,449.3L311.8,447L325,439.6L337.2,436.1L341,436.5L336,438.8L331.6,438.6L326.4,440.8L327.4,443.9L318,447.7L320,450.8L324.5,452.3L329.1,457.5L331.4,463.2L327.9,466.8L321.2,469.1L306.1,471.7L303.9,472.9L285.4,473.1L293.7,475.4L292.3,477.3L283.5,477.7L283.3,480L290.7,482.9L310.6,485.9L324.3,487.1L334.2,488.8L338.3,491.2L351.1,488.5L361.8,487L381.1,488L386.7,486L393.8,485.9L420.7,483.2L417.5,480.2L401,480.7L400.6,477.6L410.5,475.7L419.8,473L437.6,471.4L451.3,468.7L456.4,466.9L454.3,465.2L471.4,458L479.4,459.2L480.9,457L487.9,458.5L495,457.7L499.4,459L519.8,455.1L526.5,454.5L530,456.8L537.3,454.4L553.5,454.1L562.7,456.4L581,455L591,452.7L594.1,450.3L607.4,453.8L611.2,452L629.2,447.8L641,445.8L646.1,443.5L656.5,443.3L663.2,446.9L673.3,448.9L677.9,447.2L691.4,448.7L693.2,453.6L688.4,455.3L691.8,456.3L688.7,459.6L697.3,460.2L705.2,454.1L715.7,453L719.8,449.8L729.9,446.7L741,446.5L744.4,443.9L751.7,446.7L777,446.8L785.6,442.1L794.9,445.9L806.2,445.3L815.6,443L821.1,445.3L835.7,446.6L839.8,444.9L857.8,445.4L874.3,443.9L875.2,441.4L881.8,446L904.1,445.9L907.3,448.6L923.6,451.3L928.6,450.4L935.6,452.7L942.2,453.3L951.9,456.5L967.8,457.1L975.6,459.2L970.2,464.6L961.4,466.6L956.2,469.6L954.1,474.1L957.6,477.2L963.9,478.8L949.3,479.9L943.9,484.9L954.7,488.9L969.1,491.5L970.6,492.8L981.2,494.5L988.8,493.8L995.2,494.6L1000,495.3L1000,510L500,510L0,510ZM311.8,409.6L319.3,411.9L310.7,414.5L302.8,412.9L292.6,406.8L302.5,410.2L304.8,407L309.4,406.2ZM337.4,401.9L339.6,403.2L335,405L330,404ZM695.2,398.1L691,398.3L691.5,395.1ZM903.9,373.3L911.9,373.5L910.9,380L905.7,381L902,374.3ZM980.6,373.7L984,376L976.3,382.9L973.9,387.5L970.4,389.6L963,388.4L964,385.3L973.7,379.5L980,372.5ZM985,360.4L987,363.4L992.9,365.4L995.9,364.7L988.9,374.7L982.8,369.7L984.9,367.8L984.2,361.5L979.5,355.9L984.2,358ZM964.2,321.6L959.6,320.2L955.6,315.8ZM639,297.7L640.2,302.3L630.8,329.3L626.1,331.1L622.3,329.4L620.1,321.3L623.3,315.8L622.1,308.4L623.5,305L628.6,303.8L632.5,300.5L636.7,293.4ZM898.8,298.2L903.8,301.6L906.6,312.7L913.5,316.6L915.8,322.1L924.6,330.2L926.6,338.1L924.7,347.9L921.4,351.8L916.9,361.2L916.7,364L912,365L906.4,368.4L902.4,366.7L898.9,367.8L890.7,365.6L887.7,360.4L883.7,358.9L883.9,355.5L880.1,357.9L882.8,351.4L877.7,356.9L873,350.6L864.8,347.5L850.4,349.5L845.1,351.6L843.5,354.1L833,354.4L827.8,357.4L819.5,355L821.7,349.5L819.6,341.8L817.1,338.1L815,327.7L817.1,320.4L835.7,314.7L839.6,310.5L841.7,305.6L849.1,299.5L853,298.4L856.6,301.3L859.5,300.1L862.8,294.8L868.3,293.7L867.7,290.9L875.8,294L880.4,294.3L876.2,300.9L886.8,308.3L891.3,308.2L893.6,301.8L893.6,294.5L895.9,289.6ZM845.7,288.2L844.4,285.8L847.5,284L852.7,284.1ZM827.5,282.5L830.9,284.2L824.3,285.1ZM841.4,282.5L841,284L833.1,284.5ZM801.7,278.8L807.7,278L813.8,281.1L821.4,283.3L818.2,284.3L800.8,281.6L792.7,279L794.6,276.4ZM922.2,275.2L917.3,277.5L912.2,275.1L918.9,275.2L923.2,272ZM862.4,268.6L855.3,269.4L855.9,267.9ZM925.4,272.5L918.5,267.6L922.9,269ZM872.6,263.2L873.4,267.7L876.3,269.4L878.6,266.4L884.2,264.7L901.6,270.7L905.5,275.2L910.1,276.9L908.2,278.7L913.1,285.3L918.9,288.6L910.9,288.1L905.7,282.4L902.1,281.2L896.2,285.9L889.3,283L882.3,283.4L885.2,280.3L883.1,275L871.3,269.8L869.4,271.4L867.3,266.1L862.6,262.6L867.7,261ZM847.9,256.1L845.7,258.8L833.8,259.3L835.9,263.9L842.6,261.7L837.5,265.3L842.1,274.8L839.5,274.7L834.2,268.1L834.5,275.4L831.6,274.9L831.9,269.7L829.9,267.8L833.4,258.4L835.8,256.4L844.7,257.5ZM857.5,256.9L855.8,262.5L853.9,257.2L855.4,254ZM793.9,276.3L790.9,276.3L785,271.7L773.9,254.9L764.9,246.2L770.8,245.4L779.6,254.2L782.4,254.2L788.4,259.7L791.4,266.5L794.7,268.5ZM827.4,254.9L830.5,257.5L827.3,257.8L826.4,262.2L823.8,264.1L822.6,271.1L819.1,271.4L814.6,268.7L811.3,269.7L806.2,268.2L803,261.3L804.6,254.4L808.8,254.9L809.4,252.5L813.9,251.4L817.2,247.4L825.4,240.8L831.1,245L825.9,251ZM851,236.6L848.3,244.5L845.1,242.9L843.4,238.2L839.1,240.8L839.8,237.7L850.6,234.2ZM725.6,242.8L723.2,243.4L721.4,237.2L722.6,232.7L727.2,239.1ZM844.4,231.4L841.7,234.9L841.5,229.8ZM838.6,227L842,227.8L838.9,231ZM848.6,226.2L846.7,231.9L845.2,225.1ZM837,208.6L840.3,212.5L837.9,215.7L838.1,220.2L844.3,221.7L844.7,225.2L841.5,222.4L835.1,221.5L833.5,218.4L835.3,208.6ZM298.4,204.8L303.3,204.8L310.2,208.3L300.8,209.9L293.4,208.2L299.1,208.1ZM806.5,208.1L801.8,208.6L803.1,204.9L807.7,204.2ZM278.7,196.8L282.4,197.5L287.4,201.1L294,203.7L284,204.8L285.9,203.3L281.3,200L270.1,197L271.5,195.6ZM836.6,196.7L835.4,199L833.6,194.6L837.5,189.7L838.8,190.6ZM874,165.1L869.5,169.2L869.2,165.4ZM596,160.9L591.6,164L589.6,162.5ZM565.8,160.8L573,161.9L568.7,163ZM543.1,153.8L541.9,158.3L534.5,155.5L534.9,154.1ZM525.6,145.5L526.9,151.2L523.4,151.2L522.7,146.2ZM891.6,156.8L889.6,162.4L881.2,163.9L877.2,167L875.2,163.9L863.8,165.9L866.7,167.9L864.8,172.6L859.5,167.5L868.4,161.6L876.9,161.3L879.8,156.4L881.6,157.7L887.3,153.8L889.7,145.6L892.7,145.1L894.1,151.2ZM899.7,137.3L903.7,136.7L904.3,139.8L900.2,140.6L897.7,143.3L893.4,141.4L891.8,144.5L888.8,144.5L889.8,139.6L892.7,139.5L894.4,133.5ZM156.9,125.3L151,124.4L143.5,119L150.7,120.3ZM344.1,119.2L344.9,122.3L351.5,123.2L353.8,128L349.5,130L349.3,127.4L335.4,127.8L342.4,117.5ZM899,119L901.8,124L897.7,123L896,127.1L898.7,129.9L894.7,132.3L894.9,118.5L893.6,111.9L896.1,110.7ZM481.1,114.8L472.3,116.1L474.5,113.2L473.1,110.3L479,106.9L484.3,108.5ZM535.2,105.5L533.6,107.8L530.3,105.1ZM491.7,97.1L488.7,100.1L494.6,99.8L491.3,104.5L494.2,104.7L498.8,108.7L501.3,113L504.7,113.5L501.5,119L484,120.7L488,117.7L487.3,111.4L491.4,111.7L489.9,108.3L484.5,106.4L482.9,102.3L486.1,97.1ZM263.4,77.6L277.5,83L275,83.9L269.1,81.9L262.4,84.9L260.1,82.1L261.4,77.4ZM459.7,75.4L462.2,79.1L458.6,81.2L448.2,83.6L436.8,82.3L439.5,81.1L433.5,79.7L438.3,78.4L432.4,77.7L438.5,75.5L442.8,77.4ZM636.4,145.3L637.8,147.3L635.7,152.2L636.7,155.6L641.2,157.6L649.5,157.3L649.7,151.8L646.4,148.8L647,146.5L652,146.2L649.2,143L642.6,140.2L639.7,136.1L647.3,134.3L647.3,129.9L642.2,129.3L632.4,133.2L629.7,136.1L631.9,140.6ZM1000,79.5L1000,79.5L992.8,80.5L998.2,85L997.9,86.9L992.7,86.3L982.4,88.7L973.1,93.7L969.2,91.7L961.9,93.9L954.3,93.7L950,98.2L953.3,100L950.3,107.6L945.5,109L944.5,112.2L940.4,112.9L935.5,118.3L931.8,106.2L935.6,99.4L939.9,98.7L949.6,92.4L954.6,90.2L956.9,86.2L944.8,91.8L942.5,88.4L935.3,89.4L928.4,94L930.7,95.7L920.2,96.7L920.4,94.7L912.6,95.7L904.1,95.2L895,96L875.3,108L883.8,110.7L888.6,109.5L892.6,112.5L889.1,125.4L883.9,131.4L874.6,139.5L870.9,141.1L867.4,139.8L860.2,144.4L860.3,146.4L854.3,149.6L859.6,157.8L858.6,162.5L851.3,164.5L850.5,155.1L846.4,154.1L848.3,150.6L845.2,149.1L836.3,152L839.4,147.7L837.9,146.3L826.5,152.4L832.5,156.8L835.6,154.8L840.3,157.4L836.4,158.2L831,163L834,164.6L838.6,172L836.8,174.8L839.1,177.1L829.6,191.8L821.9,196.7L816.1,197.4L807.7,200.6L801.4,199.7L796.4,202.5L793.5,207.1L802.4,217.6L803.3,227.6L792.1,236.1L791.9,232.4L787.5,230.5L785,226.1L778,222.8L775.4,232.3L779.1,239.4L787.2,246.5L787.6,256.6L781.6,252.3L776.4,239.6L772.6,236.8L774.3,228.2L769.9,213L764.9,216.3L761.6,215.5L762,209.4L755.8,201.1L753.9,196.8L750.8,199.3L741.6,200.3L740.3,204L736.3,205.9L728.3,212.7L723.1,215.8L721.8,231.2L715.4,237.9L712.8,235.3L704.3,215.6L701.7,200.7L695.7,202L693.5,197.6L687.3,193.5L684.4,189.4L670.8,190.3L659.4,188.5L656.9,184.6L652,186.4L643.1,182.6L639.2,176.3L633.3,176.7L635.6,183.1L641,189.2L643.3,188.3L643.9,193.3L650,193L656.6,186.7L656.7,190.8L663.1,194.5L666.1,198L660.5,207L653.5,212.1L645.5,214.5L644.9,216.7L635.2,221.1L620.8,224.9L618.5,213.4L613.7,205.9L608.7,200.9L608.5,197.3L597.6,182L597.1,178.5L594.2,183.2L590.9,180.3L599.1,193.5L598.7,195.8L602.4,198.9L604.1,208.3L606.7,210L609.1,215.8L620.3,225.6L618.7,227.4L622.5,231L629.6,230L642,226.6L641.8,230.4L637.4,241.1L629.3,252.1L619.8,259.2L615.5,264.7L611.8,267.1L607.8,278L608.9,283.6L612.4,289.9L613.3,300.8L609.6,306.4L603.9,308.9L596.6,315L598.8,321.4L597.3,328L591.7,330.4L590.2,338.6L583.5,346.5L578.4,351L571.6,354.3L562.7,354.1L554.5,356.7L550.7,354.1L550.6,348L542.3,335.3L539.6,321.4L532.8,310.2L532.3,306.3L535.4,296.5L537.9,293.4L536.8,283.8L533.1,274L524.4,263.1L527.2,251.5L523.6,246.7L516.4,248.2L512,242.6L502.9,243.5L494.5,246.9L488.9,245.6L479.1,247.9L475,246.6L464,238.3L458.8,229.8L453.9,226.2L451,219.1L454.3,215.2L454.8,204.2L452.6,201.7L455.6,194.1L459.9,187.1L464.9,182.1L467.5,181.8L473.4,176.9L472.7,173.4L476,167.7L480.8,165.2L483.5,160.7L494,162.3L504.1,158.3L526.4,156.2L529.4,158.9L528.2,164.6L530.9,167.5L542.3,170.4L543.6,172.8L553,175.9L557.9,169.1L580.3,174.3L583.6,172.6L595.2,173.3L600,163.8L600.4,160.5L596.4,157.8L590.3,159.7L585.1,158.1L582.5,159.6L576.8,158.2L573.1,153.9L572.7,150.4L581.2,145.5L586.5,145.9L593.1,143.3L597.7,143.2L606.5,146.3L615.4,144.6L615.1,141.5L601.9,134.3L608.7,128.7L599.5,130.4L597.3,133.2L601.5,133.7L594.1,136.8L590.1,134.1L593.3,132.6L585.4,130.6L580.1,135.2L576.9,141.7L580,146L573.2,148.5L572.4,146.6L563.4,147.6L563.8,151.7L566.7,153.8L560.2,157.7L558.7,153.6L553.9,148.2L554.3,144.1L544.5,139.1L541.4,134.8L536.5,133L535,137.5L544.1,144.6L551,147.9L546.9,147.7L547.7,150.5L544.7,154.5L542.8,148.8L535.8,145.4L524.7,136.8L518.1,140.2L508.6,140.3L508.4,143.6L502.3,146.1L499.2,150.8L500.3,152.4L494,158.1L487.9,158.1L485.1,160.1L481.9,157.4L475.3,157.6L473.5,152.4L475.6,146.8L473.9,140.5L477.8,138.5L494.7,139.4L496.7,132.2L487.2,124.8L495.5,124.9L503.7,120.8L504.6,118.5L510.6,116.6L513.1,112.5L524.4,109.9L522.6,105.8L523.7,101.4L529.4,99.6L530.3,103.2L526.8,105.9L530.4,110L534.8,108.7L539.2,110.7L549,107.6L554.6,108.8L559.1,106.7L558.6,102.3L562.6,99.6L567,101.6L567.9,97.8L564.8,95.6L571.8,94.4L577.7,94.8L578,91.9L563.5,93.8L559.2,91.3L558.5,86.1L562.3,82.7L570.5,79.1L566.4,76.6L561.6,77.4L559.4,81.1L549.6,85.7L547.6,89.6L552.2,93.1L546.7,96.9L544.1,104.2L536,106.2L528.8,94.8L523.3,98L515.7,97.3L513.9,87.9L529.2,80.9L541,71.6L553.3,66.1L564,65L568.2,62.7L578.2,62.3L586.9,64.3L583.3,65L593.8,67.5L601.4,68.2L611.9,71.3L614.2,74.5L606.6,76.7L594.2,74.6L596.7,76.9L597.1,81.1L602.8,82.6L603.3,79L610,80.8L610.5,78.1L616.9,75.3L622.1,76.5L623.7,74.6L620.7,69.5L628.5,70.4L628.7,74.8L633.7,72.4L649.2,68.7L648.6,70.6L663.3,68.7L666.5,70.3L669.7,68.5L668.2,66L676.4,66.8L690.3,70.9L692.2,69.4L686.8,65.8L685.3,62.7L694.3,57.1L701.6,57.8L699.6,61.6L702.2,64.5L701.6,68.3L704.6,70L698,75.8L701.2,76.2L708.5,71.8L708.2,68.4L704.4,66.6L706.7,63.8L703.1,61.5L710.2,59.2L710.8,60.4L721.3,59.1L726.4,60.7L723.6,55.4L741.2,54.6L742.1,51.3L759,48.8L768.5,49.1L779.9,47.7L783.3,45.3L789.9,44.2L790.8,45.8L808.5,46.9L817,49.3L816.3,50.8L803.9,53.9L815.4,56.3L821,55.1L829.9,55.6L830.6,56.9L842.2,57.3L842.4,55.2L852.7,55.7L857.2,57.1L856.8,60.1L864.7,63.4L867.4,60.5L888.5,61.4L886.5,58.8L890.2,57.6L915.3,59.4L924.9,63.2L941.7,63.1L943.6,66.3L947.1,67.1L966.2,66.7L971,69.2L974.5,68.3L973.5,65.3L988.1,65.9L996.1,67.2L1000,68.4L1000,79.5ZM0,68.4L0,68.4L0,68.4L15.1,73.7L22.6,74.1L28.1,76.7L20.8,78.2L20.7,80.9L17,81.4L10.5,78.5L0.3,77L0,79.5L0,79.5L0,68.4ZM234.3,68L232.6,69L222.8,67.2L227.2,65.2ZM248.5,67L248.5,69.8L252.2,67.6L255.5,69.4L257.4,73.3L262.3,68.9L262.4,65.9L274.2,67.9L272.3,70.7L273.9,73.6L268.5,75.5L261.8,75.1L257.4,80.1L250.2,82.1L238.2,90.8L237,96.3L241.1,96.7L243.6,101.4L252.7,102.1L263.9,106.4L271.5,106.8L271,109.2L273.9,115.1L278,117.8L281.7,114L278.3,108.1L282.7,106.8L287.4,103L285.3,98.7L281.9,96.7L285.2,93.7L283,86.9L294.9,86.5L301.7,90.2L306.7,90.4L307.5,96.2L312.1,98.3L316.1,96.8L320.6,92.4L329.5,101.8L328.3,103.5L334.5,106.7L340.7,108.3L345.1,112L345.3,115.1L333.2,120.4L315.6,120.5L309.7,123.7L302.5,129.9L315.1,123.5L321.7,124.6L319.1,126.5L320.9,131.6L329.1,132.5L331.9,129.4L333.9,132.4L324.3,135.9L318.4,139L316.2,136.5L321,134.2L314,135.5L305.2,138.7L303.3,140.9L305.7,144.3L297.6,145.5L289.7,154.6L287.4,152.5L289.6,161.2L281.8,165.9L274.1,172.7L273.6,174.6L277.6,185.3L276.7,190L274.5,190L267.5,176.8L263.6,177.7L260,175.6L251.1,176.2L251.6,179L245.5,177.6L237,178.1L229.5,183.9L230.2,188.1L228.1,197.7L233.6,207.7L237.7,209.6L247.9,206.4L249.2,201.7L258.2,200.2L254.6,214.1L253,215.9L265.6,216L269,218.3L267.1,228.4L273.8,235.6L279,233.3L286.6,236L289.8,233.8L290.3,230.5L296.1,228.8L300.7,225.5L301.7,229.5L308.7,228.2L310.6,230.7L328.1,230.2L326.7,232.4L335.8,237.8L341.3,243.4L347.1,243.3L353.1,245L357.5,248.3L361.3,257.1L360,260.2L364.9,260.7L375.3,264.3L376.2,267.5L379.4,266.6L388.9,268L396.6,273.4L402.1,275.2L403.5,280.4L402.4,285L397.1,290.7L391.8,298.3L392,303.5L389.6,314.4L386.3,320.9L383.4,323.8L376,324.9L370.9,326.9L365.3,331.9L364.2,339.7L359.2,346.1L354.8,349.6L350.5,355.5L347.4,357.1L337.5,355.6L341,358L342.3,362.5L339.6,366.1L335.5,367.6L326.8,367.9L327.4,373L319.1,374.1L319.5,376.8L323.7,378.2L318.9,380.8L317.9,385.1L312.3,388.6L317.7,391.2L311.6,398.5L308,400.9L310.7,405.4L303.2,406.9L302.8,409.5L298.5,408.7L291.8,405.2L290,395.2L294.1,390.4L289.9,389.6L292.5,387.1L293.5,382.5L296.6,383.5L298,377.7L293.5,380.1L296.8,363.1L301.6,350.1L301.4,340.2L303,336.8L305.3,319.4L304.5,311L301.5,308.2L288.9,300.7L278.4,280L274.3,277L273.9,273.2L278.4,267.4L275.1,266.2L277.5,257.9L281,256.2L285.8,249.3L284.8,241.4L280.2,235L277.8,239L269.5,237.2L261.7,231.8L261.9,229.2L256.5,224.1L246.6,221.3L237,215L231.8,216.5L212.5,209.2L206.3,203.2L207.6,200.5L205.5,196.7L196.4,186.5L188.3,179.6L185.7,173.4L181.2,171.7L181.5,176.2L190,185.9L196.1,195.1L188.4,191.3L188.1,187.7L182,184.6L182.9,180.7L179.1,177.9L174.2,168.2L170.8,165.5L165.6,164.3L156.3,151.8L154.5,148L154.1,141.2L155.8,133.5L154,125.6L158,126.6L158.4,123.9L151,120L146,118.8L144.9,114.6L141.3,113.5L137.4,107.8L127.6,98.5L120.5,98.3L111.5,94.6L100.1,93.3L91.4,90.9L88.8,93.4L78.6,95.7L79.4,91.3L72.2,95.1L74.2,96.5L65.8,100.5L59.9,104.5L47,108.1L41.8,108.4L50.5,104.7L54,104.4L61.9,100.1L63.8,96.3L58.2,97.7L54.6,95.9L50.1,97L50.4,94.3L45,93.9L38.6,89.2L42.9,84.6L47,84.8L53.4,82.9L53.4,80L41.8,81L33,77.6L43.1,75.1L50.9,76.3L40.6,71L38.3,68.7L43.3,68.6L50.3,64.6L65.1,61.8L77,63.9L97.4,65.6L101.1,65.1L120.8,68.6L126.6,66.6L130.8,66.9L144.1,64.2L150.7,67L159.2,66L183.6,70L184.7,72L194.6,71.2L205.1,68.9L210.2,71.1L218.2,72.1L226.5,71.7L226.2,70L237,70.9L238.2,68.1L232,65.3L232.2,62.2L235.5,60.2L242,61.9ZM182.9,56.9L191.5,58.7L194.7,57.3L199.5,61L198.9,57L207.2,58.1L209.8,62.8L219.5,65.5L214.6,66.9L215.5,69L205.7,67.8L185.2,69.6L177.5,67.9L174.1,65.7L187.7,64.5L172.5,64.1L177.5,61.9L168.3,61.2L172.6,58ZM287.9,56.9L279.2,57.9L276.8,55.1ZM259.6,56.8L261.7,58.5L264.3,56.3L271.3,55.1L276.1,58L275.7,59.8L283.8,57.9L302.2,63L308.9,64.1L314,67.8L308.9,69.1L319.8,71.5L323.8,74.1L328.2,74.3L322.5,79.4L314.7,75.6L310.7,77.5L318.6,81.2L319.4,85.9L308.9,82.9L316.2,88L308.7,86.9L292.2,81.1L284.1,81.6L283.6,78.6L294.6,78.2L298.2,73.1L296.4,70.9L286.5,68.6L288.3,67.9L280.7,65.1L274.2,66.3L253.7,64.4L249.4,59.3L254.4,55.7L261.6,55ZM221.2,54.9L229.5,55.1L227.6,57.2L231.8,58.4L231.3,60.9L226.8,62L215.3,58.6L221,58L217.9,56.2ZM241.1,57.9L235,59.8L233.2,57.4L237.5,54.1L248.6,54.8ZM165.4,61.7L158.1,63.1L150.2,60.4L155.7,55.3L153,53.6L162.4,53.2L173.5,53.9L179.1,55.9L168.8,58.6ZM918.7,51.4L915.5,52.5L905.9,51.2L906.5,50.3ZM240,51.7L238.5,52.8L231.1,51.9L236.5,49.9ZM903,50.1L900.8,52.2L886,52.7L880.5,50.9L882,49L893,48.6ZM226.4,46.9L227.3,51.7L219.8,51.5L215.3,50.1L215.1,48ZM199.4,48.3L205.9,49L204.7,51.7L188.3,53.3L183.7,52.4L189.5,51.2L173,51L179.4,47.6L197,50.4L193.1,47.7ZM659.8,63.6L649.1,63.4L643.3,61.5L648.6,55.1L655.3,52.7L654.5,51.4L669.9,48.2L689.3,46.3L689.4,48.2L671.1,50.9L662.4,53.6L653.9,59L654.5,61.3ZM237,45.8L245.5,46.7L252.3,50L260.1,50.3L274.6,49.7L278.2,51.9L272.4,53.2L255.1,53.4L243.3,52.1L239.2,48L230.2,46.8ZM177.2,44.3L176.8,46.5L166.9,48.7L158.7,48.6L169.2,44.7ZM568.7,43.7L562.5,44.9L557.8,42.6L563.6,42.1ZM222.1,42.4L214,42.4L207,39.7L219.9,41.1ZM791.9,42.5L776.2,43.6L781.3,39.9L792.7,41.4ZM550.7,38.6L559.8,40.7L552.9,41.8L547.6,46.6L538.2,45.1L540.7,44.1L531.2,40.9L529,38.7L538.1,38.7L547.2,37.6ZM570.7,36.6L576.1,37.6L572,39.1L555.8,39L548.2,36.9L563.7,36ZM777.6,40.9L771.5,41.2L759.2,39.4L753.3,36.8L766.5,34.3L778.3,38.4ZM258.3,38.7L261.6,39.6L252.7,42.5L242,42.4L241.3,39.5L236.2,39.5L231.4,37.3L236.8,34.4L243.3,34.3L246.9,35.8L256.1,36.9ZM309.7,29.1L323.1,29.7L328.1,31.2L312.1,33.6L318.1,33.6L307,36.1L302.3,38.3L286.4,39.7L290.6,41.9L283.6,43.6L278.8,46.2L283.6,46.7L276.2,48.4L269,47.6L251.4,47.6L256.2,45.6L254.8,43.6L264,44.6L255.7,42.3L263.6,39.6L258.5,37.1L268.3,37.5L272.6,36.5L256.7,36.3L245.6,32.5L262.5,30.4L268.9,31.3L271.1,29.8L279.7,29.1L297.7,28.8ZM424.7,28L442.1,30.2L437,31.3L411.4,31.7L431,32.8L436.4,32L435.6,34.6L456.2,32.5L466.1,34.2L450.7,37.4L445.3,41.2L445.4,44.3L448.7,46.2L439.8,47.1L444.9,48.6L442.6,51.2L446.2,53.6L440,53.8L442.3,55.9L434.5,56.4L438.1,59.5L432.6,58.3L438.5,61.5L439.6,63.7L434.6,64.2L429,61.6L426.8,64.9L437.9,65.2L422.9,69.8L411.7,70.8L405,74.8L399,76.7L389.4,78.2L385.6,83.7L381.1,85.9L382.2,88.1L379.5,93.1L375.6,93.2L371.5,91L365.9,90.9L356.6,83.3L354.8,79L350.9,76.4L350.1,73.4L352.8,70.1L357,69.1L358.7,65.8L351.5,67.5L348.1,66.6L349,63.3L357.3,64L350,61.3L344.9,61L348,58.4L337.3,50.2L329.8,48.6L309.7,48.7L301.7,46.1L314.5,45.1L302.7,44.3L296.8,42.1L317.5,39.5L311,37.5L313.5,36.3L327.1,34.1L326,32.9L341.1,31.7L352.7,32.5L360,31L376.3,33.2L370.1,30.5L379.4,28.8L389.2,28.9L402.5,27.7Z";
const MAP_CITIES = {
  LHR: [498.8, 117.0], JNB: [578.4, 332.6], SIN: [788.9, 256.2], JFK: [295.1, 147.1]
};
const MAP_HUB = [653.8, 189.9]; // DXB
function renderWorldMap(mountId){
  const mount = document.getElementById(mountId);
  if(!mount) return;
  const dots = Object.entries(MAP_CITIES).map(([name,[x,y]])=>
    `<circle class="map-dot" cx="${x}" cy="${y}" r="4"/><text class="map-label" x="${x+10}" y="${y-4}">${name}</text>`
  ).join("");
  const arcs = Object.values(MAP_CITIES).map(([x,y])=>
    `<line class="map-arc" x1="${MAP_HUB[0]}" y1="${MAP_HUB[1]}" x2="${x}" y2="${y}"/>`
  ).join("");
  mount.innerHTML = `<svg class="world-map-svg" viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="World map showing Sky Rocket coordination hub in Dubai connected to London, Johannesburg, Singapore and New York">
    <path class="map-continent" d="${WORLD_MAP_PATH}"/>
    ${arcs}
    ${dots}
    <circle class="map-hub-ring" cx="${MAP_HUB[0]}" cy="${MAP_HUB[1]}" r="8"/>
    <circle class="map-hub-dot" cx="${MAP_HUB[0]}" cy="${MAP_HUB[1]}" r="5"/>
    <text class="map-hub-label" x="${MAP_HUB[0]+14}" y="${MAP_HUB[1]-4}">DXB — HQ</text>
  </svg>`;
}

/* ---------- one source of truth for nav + footer ---------- */
const NAV_ITEMS = [
  {href:"index.html", label:"Home"},
  {href:"services.html", label:"Services", drop:[
    {href:"fuel.html", label:"Fuel Services"},
    {href:"permits.html", label:"Flight Permits"},
    {href:"ground-handling.html", label:"Ground Handling"},
    {href:"charter.html", label:"Charter Services"},
    {href:"humanitarian.html", label:"Humanitarian Operations"},
    {href:"navigation-fee.html", label:"Navigation Fees"},
  ]},
  {href:"about.html", label:"About Us"},
  {href:"news.html", label:"Fuel News"},
  {href:"contact.html", label:"Contact"},
];

function currentPage(){
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function isActive(href, current){
  if(href === current) return true;
  const servicePages = ["fuel.html","permits.html","ground-handling.html","charter.html","humanitarian.html","navigation-fee.html"];
  if(href === "services.html" && servicePages.includes(current)) return true;
  return false;
}

function renderHeader(){
  const mount = document.getElementById("siteHeader");
  if(!mount) return;
  const current = currentPage();

  const navHtml = NAV_ITEMS.map(item=>{
    const active = isActive(item.href, current) ? " active" : "";
    if(item.drop){
      const dropHtml = item.drop.map((d,i)=>`<a href="${d.href}" style="--i:${i}">${d.label}</a>`).join("");
      return `<li class="nav-drop"><a href="${item.href}" class="${active.trim()}">${item.label}<svg class="chev" viewBox="0 0 12 8" width="10" height="7" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a><div class="dropdown">${dropHtml}</div></li>`;
    }
    return `<li><a href="${item.href}" class="${active.trim()}">${item.label}</a></li>`;
  }).join("");

  let mi = 0;
  const mobileHtml = NAV_ITEMS.map(item=>{
    if(item.drop){
      const sub = item.drop.map(d=>`<a href="${d.href}" class="mob-sub" style="--i:${++mi}">${d.label}</a>`).join("");
      return `<a href="${item.href}" style="--i:${++mi}">${item.label}</a>${sub}`;
    }
    return `<a href="${item.href}" style="--i:${++mi}">${item.label}</a>`;
  }).join("") + `<a href="contact.html" class="mob-cta" style="--i:${++mi}">Get a Quote <span>→</span></a>`;

  mount.innerHTML = `
    <div class="topbar"><div class="container topbar-in">
      <span>24/7 AVIATION OPERATIONS</span>
      <div><a href="tel:+971521947709">+971 52 194 7709</a><span>·</span><a href="mailto:fltops@skyrocketjetfuel.com">fltops@skyrocketjetfuel.com</a><span>·</span><span>Dubai, UAE</span></div>
    </div></div>
    <header class="site-header" id="navbar"><div class="container nav-inner">
      <a class="brand" href="index.html"><img src="https://skyrocketjetfuel.com/wp-content/uploads/2025/11/SkyRocketJetH.png" alt="Sky Rocket Jet Fuel"></a>
      <ul class="nav-links">${navHtml}<li><a href="contact.html" class="nav-cta"><span>Get a Quote</span><i aria-hidden="true">→</i></a></li></ul>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div></header>
    <div class="menu-overlay" id="menuOverlay"></div>
    <nav class="mobile-menu" id="mobileMenu" aria-label="Mobile">${mobileHtml}</nav>
  `;
}

function renderFooter(){
  const mount = document.getElementById("siteFooter");
  if(!mount) return;
  mount.innerHTML = `
    <footer><div class="container footer-grid">
      <div class="f-brand">
        <img src="https://skyrocketjetfuel.com/wp-content/uploads/2025/11/SkyRocketJetH.png" alt="Sky Rocket Jet Fuel">
        <p>Global aviation fuel supply, flight permits, ground handling, charter and humanitarian operations. Based in Dubai.</p>
        <div class="social">
          <a href="https://www.linkedin.com/company/sky-rocket-jet-fuel/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/skyrocket_aviation_srvs/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://wa.me/971521947709" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <div class="f-col"><h4>SERVICES</h4><ul>
        <li><a href="fuel.html">Fuel Services</a></li>
        <li><a href="permits.html">Flight Permits</a></li>
        <li><a href="ground-handling.html">Ground Handling</a></li>
        <li><a href="charter.html">Charter Services</a></li>
        <li><a href="humanitarian.html">Humanitarian Operations</a></li>
        <li><a href="navigation-fee.html">Navigation Fees</a></li>
      </ul></div>
      <div class="f-col"><h4>COMPANY</h4><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="news.html">Fuel News</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul></div>
      <div class="f-col"><h4>CONTACT</h4><ul>
        <li><a href="tel:+971521947709">+971 52 194 7709</a></li>
        <li><a href="mailto:fltops@skyrocketjetfuel.com">fltops@skyrocketjetfuel.com</a></li>
        <li><span>Meydan Grandstand, 6th Floor<br>Nad Al Sheba, Dubai, UAE</span></li>
      </ul></div>
    </div>
    <div class="footer-bottom"><div class="container">
      <span>© 2026 Sky Rocket Jet Fuel L.L.C-FZ. All rights reserved.</span>
      <div class="footer-bot-links"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
    </div></div></footer>
  `;
}

function initMobileMenu(){
  const h = document.getElementById("hamburger"), m = document.getElementById("mobileMenu"), o = document.getElementById("menuOverlay");
  if(!h || !m) return;
  function set(open){
    h.classList.toggle("open", open); m.classList.toggle("open", open);
    if(o) o.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    h.setAttribute("aria-expanded", open ? "true" : "false");
  }
  h.addEventListener("click", ()=>set(!h.classList.contains("open")));
  if(o) o.addEventListener("click", ()=>set(false));
  document.addEventListener("keydown", e=>{ if(e.key === "Escape") set(false); });
  m.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>set(false)));
  window.addEventListener("resize", ()=>{ if(window.innerWidth > 980) set(false); });
}

/* header: compacts after 20px, slides away when scrolling down, returns when scrolling up */
function initScrollHeader(){
  const nav = document.getElementById("navbar");
  if(!nav) return;
  let last = window.scrollY, ticking = false;
  function update(){
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    if(!document.body.classList.contains("menu-open")){
      if(y > 220 && y > last + 6) nav.classList.add("nav-hide");
      else if(y < last - 6 || y <= 220) nav.classList.remove("nav-hide");
    }
    last = y; ticking = false;
  }
  window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  update();
}

/* ---------- animated dashboard-style counters ---------- */
function initCountUp(){
  const els = document.querySelectorAll(".count-up");
  if(!els.length) return;
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();
      function tick(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, {threshold:.4});
  els.forEach(el=>io.observe(el));
}

function initReveal(){
  const cards = document.querySelectorAll(".reveal");
  if(!cards.length) return;
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
  }), {threshold:.12});
  cards.forEach(x=>io.observe(x));
}

/* ---------- quick lead popup: logo + blurb + name/phone/email, shown once per visit on the homepage ---------- */
function initLeadPopup(){
  if(currentPage() !== "index.html") return;
  if(sessionStorage.getItem("leadPopupShown")) return;

  const wrap = document.createElement("div");
  wrap.id = "leadPopup";
  wrap.className = "lead-popup";
  wrap.innerHTML = `
    <div class="lead-popup-card">
      <button class="lead-popup-close" id="leadPopupClose" aria-label="Close">&times;</button>
      <div class="lead-popup-left">
        <img src="https://i.imgur.com/4m34hJm.png" alt="Sky Rocket Jet Fuel" class="lead-popup-logo" onerror="this.style.display='none'"/>
        <p>Sky Rocket Jet Fuel delivers expert flight support, permits, fueling and charter solutions with reliability, speed and global operational excellence.</p>
      </div>
      <form class="lead-popup-right" id="leadPopupForm">
        <input type="text" id="lp-name" placeholder="Name" required/>
        <input type="tel" id="lp-phone" placeholder="Phone" required/>
        <input type="email" id="lp-email" placeholder="Email Address" required/>
        <input type="text" id="lp-website" name="website" autocomplete="off" tabindex="-1" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0" aria-hidden="true"/>
        <p class="lead-popup-error" id="leadPopupError" style="display:none"></p>
        <button type="submit" class="lead-popup-submit" id="leadPopupSubmit">SUBMIT</button>
      </form>
    </div>`;
  document.body.appendChild(wrap);

  function close(){
    wrap.classList.remove("open");
    sessionStorage.setItem("leadPopupShown", "1");
    setTimeout(()=>wrap.remove(), 350);
  }
  setTimeout(()=>wrap.classList.add("open"), 1200);
  wrap.addEventListener("click", e=>{ if(e.target === wrap) close(); });
  document.getElementById("leadPopupClose").addEventListener("click", close);
  document.addEventListener("keydown", e=>{ if(e.key === "Escape" && wrap.classList.contains("open")) close(); });

  document.getElementById("leadPopupForm").addEventListener("submit", async e=>{
    e.preventDefault();
    const name = document.getElementById("lp-name").value.trim();
    const phone = document.getElementById("lp-phone").value.trim();
    const email = document.getElementById("lp-email").value.trim();
    const website = document.getElementById("lp-website").value;
    const errorEl = document.getElementById("leadPopupError");
    const btn = document.getElementById("leadPopupSubmit");
    errorEl.style.display = "none";

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      errorEl.textContent = "Please enter a valid email address.";
      errorEl.style.display = "block";
      return;
    }

    btn.disabled = true; btn.textContent = "SENDING…";
    try{
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "quick-lead", name, email, phone, website })
      });
      const result = await res.json().catch(()=>({ok:false}));
      if(result.ok){
        wrap.querySelector(".lead-popup-left").insertAdjacentHTML("beforeend", '<p class="lead-popup-thanks">Thanks — our team will reach out shortly.</p>');
        document.getElementById("leadPopupForm").style.display = "none";
        setTimeout(close, 2200);
      } else {
        errorEl.textContent = result.error || "Something went wrong. Please try again.";
        errorEl.style.display = "block";
        btn.disabled = false; btn.textContent = "SUBMIT";
      }
    } catch(_){
      errorEl.textContent = "Couldn't reach the server. Please try again.";
      errorEl.style.display = "block";
      btn.disabled = false; btn.textContent = "SUBMIT";
    }
  });
}

/* ---------- contact form: posts to contact-handler.php, no email client needed ---------- */
function initContactForm(){
  const btn = document.getElementById("f-submit-btn");
  if(!btn) return;
  const nameEl = document.getElementById("f-name");
  const emailEl = document.getElementById("f-email");
  const msgEl = document.getElementById("f-msg");
  const companyEl = document.getElementById("f-company");
  const phoneEl = document.getElementById("f-phone");
  const serviceEl = document.getElementById("f-service");
  const icaoEl = document.getElementById("f-icao");
  const websiteEl = document.getElementById("f-website"); /* honeypot, always empty for real visitors */
  const errorEl = document.getElementById("form-error");
  const okEl = document.getElementById("form-ok");

  btn.addEventListener("click", async ()=>{
    const name = (nameEl.value || "").trim();
    const email = (emailEl.value || "").trim();
    const message = (msgEl.value || "").trim();
    errorEl.style.display = "none";
    okEl.style.display = "none";

    if(!name || !email || !message){
      errorEl.textContent = "Please fill in your name, email, and message.";
      errorEl.style.display = "block";
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      errorEl.textContent = "Please enter a valid email address.";
      errorEl.style.display = "block";
      return;
    }

    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending…";

    const data = new URLSearchParams({
      name, email, message,
      company: companyEl.value || "",
      phone: phoneEl.value || "",
      service: serviceEl.value || "",
      icao: icaoEl.value || "",
      website: websiteEl ? websiteEl.value || "" : ""
    });

    try {
      const res = await fetch("contact-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      });
      const result = await res.json().catch(()=>({ ok:false }));

      if(result.ok){
        document.getElementById("contact-form").querySelectorAll("input,select,textarea").forEach(el=>{
          if(el.type !== "hidden") el.value = "";
        });
        okEl.style.display = "block";
        okEl.querySelector(".ok-detail").textContent = "We've received your message and will get back to you shortly.";
      } else {
        errorEl.textContent = result.error || "Something went wrong. Please email us directly at fltops@skyrocketjetfuel.com.";
        errorEl.style.display = "block";
      }
    } catch(e){
      errorEl.textContent = "Couldn't reach the server. Please email us directly at fltops@skyrocketjetfuel.com.";
      errorEl.style.display = "block";
    } finally {
      btn.disabled = false;
      btn.textContent = originalLabel;
    }
  });
}

/* ---------- news feed (real, live) ----------
   Sources are tried in this order on every load / refresh:
   1) NEWS_API   - your own serverless function (api/news.js). Most reliable.
   2) rss2json   - public RSS->JSON service with CORS enabled.
   3) allorigins - public CORS proxy returning raw RSS.
   4) SNAPSHOT   - saved real headlines, clearly labelled as saved (never shown as "live").
   Browsers cannot read Google News RSS directly (CORS), which is why 1-3 exist. */
const NEWS_API = "/api/news";   // full URL if the function is hosted elsewhere
const NEWS_FEEDS = [
  {tag:"Fuel Market", q:'("jet fuel" OR "aviation fuel" OR "Jet A-1" OR "airline fuel") when:14d'},
  {tag:"Aviation",    q:'(airline OR airport OR aviation OR "air cargo") when:7d'}
];
const SNAPSHOT_AS_OF = "21 Sep 2026";
/* Saved real headlines (used only if every live source fails). Refresh occasionally. */
const fallback = [
{tag:"Fuel Market",title:"Jet fuel nears its wartime highs in the US",desc:"Bloomberg reports Gulf Coast jet fuel around $4.55 a gallon, just under the peak since the US-Iran war began, renewing cost pressure on airlines.",date:"2026-09-18",dateLabel:"18 Sep 2026",source:"Bloomberg",url:"https://www.bloomberg.com/news/articles/2026-09-18/jet-fuel-prices-rise-to-near-highest-levels-since-iran-war"},
{tag:"Fuel Market",title:"US airlines trim schedules as fuel costs climb",desc:"American, United and Southwest executives said higher jet fuel prices are forcing capacity changes, with some December flights dropped.",date:"2026-09-18",dateLabel:"Sep 2026",source:"Fox Business",url:"https://www.foxbusiness.com/markets/major-airlines-cut-flights-higher-jet-fuel-prices-hit-carriers"},
{tag:"Fuel Market",title:"IATA jet fuel monitor: global average up 6.1% on the week",desc:"IATA's weekly monitor put the global average jet fuel price at about $181 per barrel, based on Platts refinery-gate data.",date:"2026-09-17",dateLabel:"Sep 2026",source:"IATA",url:"https://www.iata.org/en/publications/economics/fuel-monitor/"},
{tag:"Aviation",title:"Middle East air travel is gradually recovering",desc:"IATA booking data for June to September point to a slow rebound after the sharp March drop following the Iran conflict escalation.",date:"2026-09-10",dateLabel:"2026",source:"IATA",url:"https://www.iata.org/en/publications/economics/chart-week/"},
{tag:"Aviation",title:"IATA Cargo Experts Conference opens in Budapest",desc:"A specialist air-cargo operations conference runs 23-24 September in Budapest, Hungary.",date:"2026-09-23",dateLabel:"23-24 Sep 2026",source:"IATA",url:"https://www.iata.org/en/pressroom"},
{tag:"Aviation",title:"IATA World Safety and Operations Conference set for Istanbul",desc:"The 2026 WSOC, hosted by Turkish Airlines, takes place 6-8 October and focuses on the human element in aviation safety.",date:"2026-10-06",dateLabel:"6-8 Oct 2026",source:"IATA",url:"https://www.iata.org/en/pressroom"}
];

/* card pictures: deterministic per headline so they don't all look the same */
const NEWS_IMGS = {
  "Fuel Market":["photo-1541612529637-7f8d12b21635","photo-1774449071927-0a7c9e69216a"],
  "Aviation":["photo-1726943880807-a9e6b22e4679","photo-1698316563981-c12b0410ed44","photo-1628354215124-dd0ab72828ac","photo-1524592714635-d77511a4834d","photo-1571086291540-b137111fa1c7"]
};
function hashStr(t){ let h=0; for(let i=0;i<t.length;i++){ h=(h*31+t.charCodeAt(i))>>>0; } return h; }
function newsImg(n, w){
  if(n.img && /^https?:\/\//i.test(n.img)) return n.img;   /* the article's own photo */
  const pool = NEWS_IMGS[n.tag] || NEWS_IMGS["Aviation"];
  return IMG_BASE + pool[hashStr(n.title||"") % pool.length] + "?auto=format&fit=crop&w=" + (w||900) + "&q=80";
}
function esc(s){return String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function safeUrl(u){ return /^https?:\/\//i.test(u||"") ? u : "#"; }
function fmtNewsDate(n){
  if(n.dateLabel) return n.dateLabel;
  const d = new Date(n.date); if(isNaN(d)) return "Latest";
  const mins = Math.round((Date.now() - d.getTime())/60000);
  if(mins >= 0 && mins < 60) return Math.max(mins,1) + " min ago";
  if(mins >= 60 && mins < 1440) return Math.round(mins/60) + " h ago";
  const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return String(d.getDate()).padStart(2,"0") + " " + M[d.getMonth()] + " " + d.getFullYear();
}

let latestNewsItems = fallback;
let newsIsLive = false;
function renderNews(items, target, limit){
  if(!target) return;
  if(!items.length){ target.innerHTML = '<p class="news-empty">No stories in this category right now.</p>'; return; }
  target.innerHTML = items.slice(0, limit||6).map(n=>{
    const img = newsImg(n, 900), fb = regionSrc(PAGE_HERO_FALLBACK, 900);
    const desc = n.desc || ("Reported by " + (n.source || "industry press") + ".");
    return `<article class="news-card"><img class="news-img" src="${esc(img)}" data-fb="${esc(fb)}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="" loading="lazy"><div class="news-body"><span class="news-tag">${esc(n.tag||"Aviation")}</span><h3>${esc(n.title)}</h3><p>${esc(desc)}</p><div class="news-meta"><span>${esc(fmtNewsDate(n))}</span><span>${esc(n.source||"Industry")}</span><a href="${esc(safeUrl(n.url))}" target="_blank" rel="noopener">Read article &rarr;</a></div></div></article>`;
  }).join("");
}
function renderFeatured(item, target){
  if(!target || !item){ if(target) target.innerHTML = ""; return; }
  const fb = regionSrc(PAGE_HERO_FALLBACK, 1200);
  target.innerHTML = `<a class="mag-card mag-link" href="${esc(safeUrl(item.url))}" target="_blank" rel="noopener">
    <img src="${esc(newsImg(item,1200))}" data-fb="${esc(fb)}" onerror="this.onerror=null;this.src=this.dataset.fb" alt="">
    <span class="mag-eyebrow">${esc(item.tag||"Aviation")} · Featured</span>
    <h3 class="mag-title">${esc(item.source||"Latest")}</h3>
    <div class="mag-meta"><div><span class="mag-label">${esc(fmtNewsDate(item))}</span><h4>${esc(item.title)}</h4></div></div>
  </a>`;
}
function renderNewsSkeleton(target, count){
  if(!target) return;
  target.innerHTML = Array.from({length: count}).map(()=>`<article class="news-skel"><div class="sk-img"></div><div class="sk-body"><div class="sk-line w40" style="height:9px"></div><div class="sk-line w90"></div><div class="sk-line w60"></div></div></article>`).join("");
}
function renderFeaturedSkeleton(target){
  if(!target) return;
  target.innerHTML = `<div class="news-skel" style="height:380px;border-radius:18px"><div class="sk-img" style="height:100%"></div></div>`;
}
function setNewsStatus(isLive, text){
  const s = document.getElementById("newsStatus"); if(s) s.textContent = text;
  const bar = document.querySelector(".live-bar");
  if(bar){
    bar.classList.toggle("is-offline", !isLive);
    const st = bar.querySelector("strong"); if(st) st.textContent = isLive ? "LIVE FEED" : "SAVED HEADLINES";
  }
  const note = document.getElementById("homeNewsNote");
  if(note){ note.hidden = isLive; note.textContent = isLive ? "" : "Saved headlines (as of " + SNAPSHOT_AS_OF + "). The live feed is temporarily unavailable."; }
}
function setNewsBanner(item){
  if(currentPage() !== "news.html" || !item || !item.img) return;
  const slides = document.querySelectorAll(".page-hero .ph-slide");
  slides.forEach((sl,i)=>{
    const im = sl.querySelector("img"); if(!im) return;
    if(i === 0){ im.onerror = null; im.src = item.img; } else sl.remove();
  });
}
function applyNewsFilter(){
  const activeBtn = document.querySelector(".news-filter-btn.active");
  const filter = activeBtn ? activeBtn.dataset.filter : "All";
  const list = (filter === "All") ? latestNewsItems : latestNewsItems.filter(n => (n.tag||"Aviation") === filter);
  const featuredTarget = document.getElementById("featuredNews");
  if(newsIsLive) setNewsBanner(latestNewsItems.find(n=>n.img));
  if(featuredTarget){
    renderFeatured(list[0], featuredTarget);
    renderNews(list.slice(1), document.getElementById("liveNews"), 9);
  } else {
    renderNews(list, document.getElementById("liveNews"), 9);
  }
}
function initNewsFilters(){
  const wrap = document.getElementById("newsFilters");
  if(!wrap) return;
  wrap.addEventListener("click", (e)=>{
    const btn = e.target.closest(".news-filter-btn");
    if(!btn) return;
    wrap.querySelectorAll(".news-filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    applyNewsFilter();
  });
}

/* ----- fetching ----- */
function withTimeout(url, ms){
  const c = new AbortController(), t = setTimeout(()=>c.abort(), ms);
  return fetch(url, {cache:"no-store", signal:c.signal}).finally(()=>clearTimeout(t));
}
function googleRss(q){ return "https://news.google.com/rss/search?q=" + encodeURIComponent(q) + "&hl=en-US&gl=US&ceid=US:en"; }
function splitSource(title){               /* "Headline - Source" -> parts */
  const m = String(title||"").match(/^(.*\S)\s+-\s+([^-]{2,45})$/);
  return m ? {title:m[1], source:m[2].trim()} : {title:String(title||""), source:""};
}
function toIso(str){
  if(!str) return "";
  const t = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(str) ? str.replace(" ","T") + "Z" : str;  /* rss2json gives UTC */
  const d = new Date(t); return isNaN(d) ? "" : d.toISOString();
}
async function fromApi(){
  const r = await withTimeout(NEWS_API, 9000);
  if(!r.ok) throw new Error("api");
  const j = await r.json();
  if(!j || !Array.isArray(j.items) || !j.items.length) throw new Error("api-empty");
  return j.items;
}
async function fromRss2Json(){
  const results = await Promise.allSettled(NEWS_FEEDS.map(async f=>{
    const r = await withTimeout("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(googleRss(f.q)), 9000);
    if(!r.ok) throw new Error("r2j");
    const j = await r.json();
    if(j.status !== "ok" || !Array.isArray(j.items)) throw new Error("r2j-bad");
    return j.items.map(it=>{ const sp = splitSource(it.title); return {tag:f.tag, title:sp.title, desc:"", date:toIso(it.pubDate), source:sp.source || "News", url:it.link}; });
  }));
  const out = results.flatMap(r=>r.status==="fulfilled" ? r.value : []);
  if(!out.length) throw new Error("r2j-empty");
  return out;
}
async function fromAllOrigins(){
  const results = await Promise.allSettled(NEWS_FEEDS.map(async f=>{
    const r = await withTimeout("https://api.allorigins.win/raw?url=" + encodeURIComponent(googleRss(f.q)), 9000);
    if(!r.ok) throw new Error("ao");
    const xml = new DOMParser().parseFromString(await r.text(), "text/xml");
    const nodes = [...xml.querySelectorAll("item")];
    if(!nodes.length) throw new Error("ao-empty");
    return nodes.map(x=>{
      const src = x.querySelector("source")?.textContent || "";
      let title = x.querySelector("title")?.textContent || "";
      title = (src && title.endsWith(" - " + src)) ? title.slice(0, -(src.length+3)) : splitSource(title).title;
      return {tag:f.tag, title, desc:"", date:toIso(x.querySelector("pubDate")?.textContent), source:src || "News", url:x.querySelector("link")?.textContent || ""};
    });
  }));
  const out = results.flatMap(r=>r.status==="fulfilled" ? r.value : []);
  if(!out.length) throw new Error("ao-empty");
  return out;
}
function finalizeItems(list){
  const seen = new Set();
  return list
    .filter(n => n && n.title && /^https?:\/\//i.test(n.url||"") && n.date && !isNaN(new Date(n.date)))
    .sort((a,b)=> new Date(b.date) - new Date(a.date))
    .filter(n=>{ const k = n.title.toLowerCase().replace(/[^a-z0-9]+/g," ").slice(0,60); if(seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, 14);
}
function clockNow(){ return new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}); }

function fallbackRender(){
  latestNewsItems = fallback;
  newsIsLive = false;
  applyNewsFilter();
  renderNews(fallback.slice(0,3), document.getElementById("homeNews"), 3);
  setNewsStatus(false, "Live feed unavailable right now - showing saved headlines (as of " + SNAPSHOT_AS_OF + ")");
}
async function loadNews(){
  if(!newsIsLive){                         /* don't flash skeletons over live cards on background refreshes */
    renderNewsSkeleton(document.getElementById("liveNews"), 6);
    renderNewsSkeleton(document.getElementById("homeNews"), 3);
    renderFeaturedSkeleton(document.getElementById("featuredNews"));
  }
  const statusEl = document.getElementById("newsStatus");
  if(statusEl) statusEl.textContent = "Updating…";
  const sources = [fromApi, fromRss2Json, fromAllOrigins];
  for(const fn of sources){
    try{
      const items = finalizeItems(await fn());
      if(!items.length) throw new Error("none");
      latestNewsItems = items; newsIsLive = true;
      applyNewsFilter();
      renderNews(items.slice(0,3), document.getElementById("homeNews"), 3);
      setNewsStatus(true, "Updated " + clockNow() + " · refreshes every 15 min");
      return;
    }catch(e){ /* try next source */ }
  }
  if(newsIsLive){ setNewsStatus(true, "Couldn't refresh just now - showing the last update"); return; }
  fallbackRender();
}

/* ---------- region imagery: ONE place to change photos ----------
   photo    = Unsplash photo id used for that region (hero slide + region card)
   fallback = a photo already used elsewhere on the site; loads automatically
              if the main photo ever fails, so no card is ever left empty.
   To swap a picture: replace the id after "images.unsplash.com/" with a new one. */
const IMG_BASE = "https://images.unsplash.com/";
const REGIONS = {
  me:{ name:"Middle East", photo:"photo-1512453979798-5ea266f8880c", fallback:"photo-1723444577698-38ec692fd556" },
  eu:{ name:"Europe",      photo:"photo-1513635269975-59663e0ac1ad", fallback:"photo-1726943880807-a9e6b22e4679" },
  af:{ name:"Africa",      photo:"photo-1516426122078-c23e76319801", fallback:"photo-1774449071927-0a7c9e69216a" },
  as:{ name:"Asia",        photo:"photo-1525625293386-3f8f99389edd", fallback:"photo-1628354215124-dd0ab72828ac" }
};
function sceneOf(key){ return REGIONS[key]; }
function regionSrc(id, w){ return IMG_BASE + id + "?auto=format&fit=crop&w=" + w + "&q=80"; }
function setRegionImg(img, key, w){
  const r = sceneOf(key);
  if(!img || !r) return;
  img.onerror = ()=>{ img.onerror = null; img.src = regionSrc(r.fallback, w); };
  img.src = regionSrc(r.photo, w);
}
function initRegionImages(){
  document.querySelectorAll("img[data-region]").forEach(img=>setRegionImg(img, img.dataset.region, 1100));
}

/* ---------- home hero: fueling & aircraft photo slideshow ----------
   Every photo id below is already used elsewhere on this site (fuel.html, charter.html,
   about.html, ground-handling.html, permits.html, navigation-fee.html) - no new,
   unverified images. To swap one, change the id after "images.unsplash.com/".
   fallback = a different photo from this same pool, so a failed load never shows blank. */
const HERO_SCENES = {
  s1:{ name:"Into-plane fueling",  kicker:"FUEL OPERATIONS", photo:"photo-1541612529637-7f8d12b21635", fallback:"photo-1774449071927-0a7c9e69216a" },
  s2:{ name:"Charter aircraft",    kicker:"AIRCRAFT",        photo:"photo-1524592714635-d77511a4834d", fallback:"photo-1571086291540-b137111fa1c7" },
  s3:{ name:"Jet A-1 uplift",      kicker:"FUEL OPERATIONS", photo:"photo-1723444577698-38ec692fd556", fallback:"photo-1541612529637-7f8d12b21635" },
  s4:{ name:"Wide-body airliner",  kicker:"AIRCRAFT",        photo:"photo-1571086291540-b137111fa1c7", fallback:"photo-1524592714635-d77511a4834d" },
  s5:{ name:"Night turnaround",    kicker:"AIRCRAFT",        photo:"photo-1771917526774-159cc58046ed", fallback:"photo-1698316563981-c12b0410ed44" },
  s6:{ name:"Apron operations",    kicker:"AIRCRAFT",        photo:"photo-1698316563981-c12b0410ed44", fallback:"photo-1628354215124-dd0ab72828ac" }
};
const HERO_SEQUENCE = ["s1","s2","s3","s4","s5","s6"];
function sceneOf(key){ return HERO_SCENES[key] || REGIONS[key]; }

/* ---------- home hero: scene slideshow (crossfade + slow zoom) ---------- */
function initHeroSlideshow(){
  const wrap = document.getElementById("heroSlides");
  if(!wrap) return;
  const keys = HERO_SEQUENCE;
  const dotsEl = document.getElementById("heroDots");
  const kickerEl = document.getElementById("heroKicker");
  const nameEl = document.getElementById("heroRegion");
  const numEl = document.getElementById("heroNum");
  const INTERVAL = 6500;
  let idx = 0, timer = null;

  wrap.innerHTML = keys.map((k,i)=>`<div class="hero-slide${i===0?" active":""}" data-key="${k}"><img alt="" decoding="async" ${i===0?'fetchpriority="high"':'loading="lazy"'}></div>`).join("");
  wrap.querySelectorAll(".hero-slide img").forEach((img,i)=>setRegionImg(img, keys[i], 1800));
  if(dotsEl) dotsEl.innerHTML = keys.map((k,i)=>`<button type="button" class="hero-dot${i===0?" active":""}" role="tab" aria-label="${sceneOf(k).name}" data-i="${i}"><span></span></button>`).join("");

  const slides = [...wrap.querySelectorAll(".hero-slide")];
  const dots = dotsEl ? [...dotsEl.querySelectorAll(".hero-dot")] : [];

  function show(n){
    if(n === idx) return;
    const prev = slides[idx];
    prev.classList.remove("active"); prev.classList.add("prev");
    setTimeout(()=>prev.classList.remove("prev"), 1600);
    idx = n;
    slides[idx].classList.add("active");
    dots.forEach((d,i)=>{
      d.classList.remove("active");
      if(i === idx){ void d.offsetWidth; d.classList.add("active"); }
    });
    const sc = sceneOf(keys[idx]);
    if(nameEl) nameEl.textContent = sc.name;
    if(kickerEl) kickerEl.textContent = sc.kicker || "AIRCRAFT";
    if(numEl) numEl.textContent = String(idx+1).padStart(2,"0");
  }
  function next(){ show((idx+1) % slides.length); }
  function start(){ stop(); timer = setInterval(next, INTERVAL); }
  function stop(){ if(timer){ clearInterval(timer); timer = null; } }

  dots.forEach(d=>d.addEventListener("click", ()=>{ show(parseInt(d.dataset.i,10)); start(); }));
  document.addEventListener("visibilitychange", ()=>{ document.hidden ? stop() : start(); });
  start();
}

/* ---------- gentle parallax on the hero photo ---------- */
function initOrangeDock(){
  const dock = document.getElementById("orangeDock");
  const foot = document.querySelector("footer");
  if(!dock || !foot) return;
  let ticking = false;
  function update(){
    const overlap = Math.max(0, window.innerHeight - foot.getBoundingClientRect().top);
    dock.style.transform = overlap ? "translate3d(0," + Math.min(overlap, dock.offsetHeight + 4) + "px,0)" : "";
    ticking = false;
  }
  window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  window.addEventListener("resize", update);
  update();
}
function initHeroParallax(){
  const layer = document.getElementById("heroSlides");
  const hero = document.getElementById("hero");
  if(!layer || !hero) return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  function update(){
    const y = Math.min(window.scrollY, hero.offsetHeight);
    layer.style.transform = "translate3d(0," + (y * 0.22).toFixed(1) + "px,0)";
    ticking = false;
  }
  window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
}

/* ---------- interior page banners: aircraft photo slideshow ----------
   Every id below is a photo already used elsewhere on the site.
   To change a page's pictures, edit its list. First entry shows first. */
const PAGE_HERO_SETS = {
  "about.html":           ["photo-1571086291540-b137111fa1c7","photo-1726943880807-a9e6b22e4679","photo-1698316563981-c12b0410ed44"],
  "services.html":        ["photo-1524592714635-d77511a4834d","photo-1698316563981-c12b0410ed44","photo-1726943880807-a9e6b22e4679"],
  "fuel.html":            ["photo-1541612529637-7f8d12b21635","photo-1774449071927-0a7c9e69216a","photo-1698316563981-c12b0410ed44"],
  "permits.html":         ["photo-1698316563981-c12b0410ed44","photo-1726943880807-a9e6b22e4679","photo-1628354215124-dd0ab72828ac"],
  "ground-handling.html": ["photo-1771917526774-159cc58046ed","photo-1628354215124-dd0ab72828ac","photo-1698316563981-c12b0410ed44"],
  "charter.html":         ["photo-1524592714635-d77511a4834d","photo-1726943880807-a9e6b22e4679","photo-1571086291540-b137111fa1c7"],
  "humanitarian.html":    ["photo-1774449071927-0a7c9e69216a","photo-1698316563981-c12b0410ed44","photo-1571086291540-b137111fa1c7"],
  "navigation-fee.html":  ["photo-1628354215124-dd0ab72828ac","photo-1726943880807-a9e6b22e4679","photo-1524592714635-d77511a4834d"],
  "contact.html":         ["photo-1726943880807-a9e6b22e4679","photo-1628354215124-dd0ab72828ac","photo-1571086291540-b137111fa1c7"],
  "news.html":            ["photo-1628354215124-dd0ab72828ac","photo-1698316563981-c12b0410ed44","photo-1726943880807-a9e6b22e4679"],
  "default":              ["photo-1726943880807-a9e6b22e4679","photo-1698316563981-c12b0410ed44","photo-1628354215124-dd0ab72828ac"]
};
const PAGE_HERO_FALLBACK = "photo-1723444577698-38ec692fd556";

function initPageHero(){
  const hero = document.querySelector(".page-hero");
  if(!hero) return;
  const set = PAGE_HERO_SETS[currentPage()] || PAGE_HERO_SETS["default"];
  const bg = document.createElement("div");
  bg.className = "ph-bg";
  bg.setAttribute("aria-hidden","true");
  bg.innerHTML = set.map((id,i)=>`<div class="ph-slide${i===0?" active":""}"><img alt="" decoding="async" ${i===0?'fetchpriority="high"':'loading="lazy"'}></div>`).join("") + '<div class="ph-shade"></div>';
  hero.insertBefore(bg, hero.firstChild);

  const slides = [...bg.querySelectorAll(".ph-slide")];
  slides.forEach((sl,i)=>{
    const img = sl.querySelector("img");
    img.onerror = ()=>{ img.onerror = null; img.src = regionSrc(PAGE_HERO_FALLBACK, 1800); };
    img.src = regionSrc(set[i], 1800);
  });
  if(slides.length < 2) return;

  let idx = 0, timer = null;
  function next(){
    const prev = slides[idx];
    prev.classList.remove("active"); prev.classList.add("prev");
    setTimeout(()=>prev.classList.remove("prev"), 1600);
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }
  function start(){ stop(); timer = setInterval(next, 6500); }
  function stop(){ if(timer){ clearInterval(timer); timer = null; } }
  document.addEventListener("visibilitychange", ()=>{ document.hidden ? stop() : start(); });
  start();
}

/* ---------- thin scroll-progress bar (all pages) ---------- */
/* page transition: the aircraft that flies across after the curtain lifts (see .plane-fly in styles.css).
   Leaving a page is instant - no cover screen. */
function initPageTransitions(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const plane = document.createElement("div");
  plane.className = "plane-fly";
  plane.setAttribute("aria-hidden","true");
  document.body.appendChild(plane);
  plane.addEventListener("animationend", ()=>plane.remove());
}

function initScrollProgress(){
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.innerHTML = "<i></i>";
  document.body.appendChild(bar);
  const fill = bar.firstChild;
  let ticking = false;
  function update(){
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0).toFixed(4) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  update();
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  renderHeader();
  renderFooter();
  initMobileMenu();
  initScrollHeader();
  initReveal();
  initContactForm();
  initCountUp();
  initNewsFilters();
  initRegionImages();
  initHeroSlideshow();
  initHeroParallax();
  initOrangeDock();
  initPageHero();
  initScrollProgress();
  initPageTransitions();
  initLeadPopup();
  renderWorldMap("worldMap");
  if(document.getElementById("liveNews") || document.getElementById("homeNews")){
    loadNews();
    setInterval(loadNews, 15*60*1000);
  }
  const rb = document.getElementById("refreshNews");
  if(rb) rb.addEventListener("click", loadNews);
});
})();
