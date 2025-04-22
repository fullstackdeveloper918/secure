import BrandSlider from './brand-slider';

const BrandOne = () => {
  return (
    <div className="brandOne">
      <div className="container container-1630">
        <div className="tp-brand-brd-top tp-brand-ptb mb-20">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-3 col-lg-3">
              <div className="tp-brand-title-box">
                <h4 className="tp-brand-title">Clients I’ve Worked With</h4>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-9">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="tp-brand-slider-wrapper">
                    <BrandSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
