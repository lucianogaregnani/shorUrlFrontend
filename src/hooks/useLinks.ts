/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { linkApi } from "../services/linkApi";
import { Link } from "../types/Link.type";

function useLinks() {
  const { accesToken } = useContext(AuthContext);

  const [links, setLinks] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllLinks = () => {
    setIsLoading(true);
    linkApi
      .getAll(accesToken.token)
      .then((res) => {
        setLinks(res);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  const createLink = (longLink: string) => {
    setIsLoading(true);
    linkApi
      .create(accesToken.token, longLink)
      .then((res) => {
        setLinks((prev) => [...prev, res]);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  const getLongLink = async (shortLink: string) => {
    try {
      setIsLoading(true);
      const longLink = await linkApi.getByShortLink(
        accesToken.token,
        shortLink
      );
      setIsLoading(false);
      return longLink;
    } catch (error: any) {
      setError(error.message);
    }
  };

  const updateLink = (linkId: string, longLink: string) => {
    const newLinks = links.filter((link) => link._id !== linkId);
    setIsLoading(true);
    linkApi
      .update(accesToken.token, linkId, longLink)
      .then((res) => {
        setLinks([...newLinks, res]);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  const removeLink = (linkId: string) => {
    const newLinks = links.filter((link) => link._id !== linkId);
    setIsLoading(true);
    linkApi
      .remove(accesToken.token, linkId)
      .then(() => {
        setLinks(newLinks);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  return {
    isLoading,
    error,
    getAllLinks,
    removeLink,
    updateLink,
    createLink,
    getLongLink,
  };
}

export default useLinks;
