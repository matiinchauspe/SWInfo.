import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const Error = ({ retry, loading }) => (
  <div className="flex items-center justify-center h-screen">
    <div className="container max-w-5xl mx-auto w-full flex flex-col gap-6">
      <Text size="2xl" className="font-bold text-center">
        Error!
      </Text>
      <Text className="text-center">Something went wrong.</Text>
      <div className="flex justify-center">
        {retry ? (
          <Button variant="subtle" onClick={retry} loading={loading}>
            Retry
          </Button>
        ) : (
          <Link className={buttonVariants({ variant: "subtle" })} to={"/"}>
            Back to Home
          </Link>
        )}
      </div>
    </div>
  </div>
);

Error.propTypes = {
  retry: PropTypes.func,
  loading: PropTypes.bool,
};

export { Error };
