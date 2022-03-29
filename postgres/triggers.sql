CREATE OR REPLACE FUNCTION remove_attributes_duplicates()
    RETURNS TRIGGER AS $$
BEGIN
    DELETE
    FROM "deviceattributes" as attrs
    WHERE attrs.value IS NULL
      AND exists(SELECT value FROM "deviceattributes" WHERE value IS NOT NULL AND deveui = attrs.deveui);

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;


DROP TRIGGER IF EXISTS attributes_duplicates
    ON "deviceattributes";
CREATE TRIGGER attributes_duplicates
    AFTER INSERT OR UPDATE
ON "deviceattributes"
      FOR EACH STATEMENT EXECUTE PROCEDURE remove_attributes_duplicates();
